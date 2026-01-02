import * as Crypto from "expo-crypto";
import { db } from "./database";
import { Product } from "./types";
const id = Crypto.randomUUID();

/* =====================
   PRODUCTS
===================== */
export const getProducts = async (
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
export const createTransaction = async (
    customerName: string,
    items: {
        product_id: string;
        price: number;
        qty: number;
    }[]
) => {
    const trxId = id;
    const trxNumber = `TRX-${Date.now()}`;
    const total = items.reduce(
        (s, i) => s + i.price * i.qty,
        0
    );

    await db.execAsync("BEGIN");

    await db.runAsync(
        "INSERT INTO transactions VALUES (?, ?, ?, ?, ?)",
        [
            trxId,
            trxNumber,
            customerName,
            total,
            new Date().toISOString(),
        ]
    );

    for (const i of items) {
        await db.runAsync(
            "UPDATE products SET stock = stock - ? WHERE id = ?",
            [i.qty, i.product_id]
        );
    }

    await db.execAsync("COMMIT");
};
