import { generateTrxNumber } from "@/helper/generate_num_transaction";
import { Transaction, TransactionItem } from "@/store/transaction/transaction.type";
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
    category_id?: number,
    limit = 50,
    offset = 0,
): Promise<Product[]> => {

    let query = `
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
  `;

    const params: any[] = [];

    if (category_id && category_id !== 0) {
        query += ` WHERE category_id = ?`;
        params.push(category_id);
    }

    query += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    return await db.getAllAsync<Product>(query, params);
};
/* =====================
   TRANSACTION
===================== */
export async function createTransaction(
    data: Transaction
) {
    if (!data.product.length) {
        throw new Error("Item transaksi kosong");
    }
    const createdAt = new Date().toISOString();

    await db.execAsync("BEGIN TRANSACTION");

    try {
        // const seq = await db.getFirstAsync<{
        //     last_number: number;
        // }>("SELECT last_number FROM transaction_sequence WHERE id = 1");

        // const nextNumber = (seq?.last_number ?? 0) + 1;
        // const trxNumber = `TRX-${String(nextNumber).padStart(6, "0")}`;

        // await db.runAsync(
        //     "UPDATE transaction_sequence SET last_number = ? WHERE id = 1",
        //     [nextNumber]
        // );


        const transacton = await db.runAsync(
            `
      INSERT INTO transactions (
        customer_name,
        sub_total,
        tax,
        total,
        created_at
      ) VALUES ( ?, ?, ?, ?, ?)
      `,
            [data.customer_name, data.sub_total, data.tax, data.total, createdAt]
        );

        const trxNumber = generateTrxNumber(transacton.lastInsertRowId);
        await db.runAsync(
            `UPDATE transactions SET transaction_number = ?
  WHERE id = ?
  `,
            [trxNumber, transacton.lastInsertRowId]
        );
        for (const item of data.product) {
            const product = await db.getFirstAsync<{
                name: string;
            }>(
                "SELECT name FROM products WHERE id = ?",
                [item?.product_id as number]
            );

            if (!product) {
                throw new Error("Produk tidak ditemukan");
            }

            await db.runAsync(
                `
        INSERT INTO transaction_items (
          transaction_id,
          product_name,
          price,
          quantity
        ) VALUES (?, ?, ?, ?)
        `,
                [
                    transacton.lastInsertRowId,
                    product.name,
                    item.price,
                    item.quantity,
                ]
            );

            await db.runAsync(
                "UPDATE products SET stock = stock - ? WHERE id = ?",
                [item.quantity, item?.product_id as number]
            );
        }

        await db.execAsync("COMMIT");
        return { transaction_id: transacton.lastInsertRowId, transaction_number: trxNumber };
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