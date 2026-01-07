import { Transaction, TransactionItem } from "@/store/transaction/transaction.type";
import * as Crypto from "expo-crypto";
import { db } from "./database";
import { Category, Product } from "./types";


/* =====================
   Categories
===================== */
export const getCategoriesStore = async (): Promise<Category[]> => {
    return await db.getAllAsync<Category>(
        `SELECT * FROM categories`
    );
};


/* =====================
   PRODUCTS
===================== */
export const getProductsStore = async (
    limit = 50,
    offset = 0
): Promise<Product[]> => {
    return await db.getAllAsync<Product>(
        `
    SELECT
      products.id   AS product_id,
      products.name AS product_name,
      products.price,
      products.stock,
      categories.id   AS category_id,
      categories.name AS category_name
    FROM products
    INNER JOIN categories
      ON products.category_id = categories.id
    LIMIT ? OFFSET ?
    `,
        [limit, offset]
    );
};

/* =====================
   TRANSACTION
===================== */
export async function createTransaction(
    data: Transaction
) {
    const id = Crypto.randomUUID();
    const trx_detail_id = Crypto.randomUUID();
    if (!data.product.length) {
        throw new Error("Item transaksi kosong");
    }

    const trxId = id;
    const createdAt = new Date().toISOString();

    await db.execAsync("BEGIN TRANSACTION");

    try {
        const seq = await db.getFirstAsync<{
            last_number: number;
        }>("SELECT last_number FROM transaction_sequence WHERE id = 1");

        const nextNumber = (seq?.last_number ?? 0) + 1;
        const trxNumber = `TRX-${String(nextNumber).padStart(6, "0")}`;

        await db.runAsync(
            "UPDATE transaction_sequence SET last_number = ? WHERE id = 1",
            [nextNumber]
        );

        await db.runAsync(
            `
      INSERT INTO transactions (
        id,
        transaction_number,
        customer_name,
        sub_total,
        tax,
        total,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
            [trxId, trxNumber, data.customer_name, data.sub_total, data.tax, data.total, createdAt]
        );
        for (const item of data.product) {
            const product = await db.getFirstAsync<{
                name: string;
            }>(
                "SELECT name FROM products WHERE id = ?",
                [item?.product_id as string]
            );

            if (!product) {
                throw new Error("Produk tidak ditemukan");
            }

            await db.runAsync(
                `
        INSERT INTO transaction_items (
          id,
          transaction_id,
          product_name,
          price,
          quantity
        ) VALUES (?, ?, ?, ?, ?)
        `,
                [
                    trx_detail_id,
                    trxId,
                    product.name,
                    item.price,
                    item.quantity,
                ]
            );

            await db.runAsync(
                "UPDATE products SET stock = stock - ? WHERE id = ?",
                [item.quantity, item?.product_id as string]
            );
        }

        await db.execAsync("COMMIT");
        return { transaction_id: trxId, transaction_number: trxNumber };
    } catch (err) {
        await db.execAsync("ROLLBACK");
        throw err;
    }
}
export async function getTransaction(): Promise<Transaction[]> {
    return await db.getAllAsync<Transaction>(
        `
    SELECT
      transactions.id,
      transactions.transaction_number,
      transactions.customer_name,
      transactions.sub_total,
      transactions.tax,
      transactions.total,
      transactions.created_at
    FROM transactions
    `
    );
}

export async function getTransactionById(id: string): Promise<Transaction> {
    const data = await db.getFirstAsync<Omit<Transaction, "product">>(
        `
    SELECT
      transactions.id,
      transactions.transaction_number,
      transactions.customer_name,
      transactions.sub_total,
      transactions.tax,
      transactions.total,
      transactions.created_at
    FROM transactions
    WHERE transactions.id = ?
    `,
        [id]
    );

    if (!data) {
        throw new Error('Transaction not found');
    }


    const data_detail = await db.getAllAsync<TransactionItem>(
        `
    SELECT
      transaction_items.id,
      transaction_items.transaction_id,
      transaction_items.product_name,
      transaction_items.price,
      transaction_items.quantity
    FROM transaction_items
    WHERE transaction_items.transaction_id = ?
    `,
        [id]
    );

    return { ...data, product: data_detail };
}