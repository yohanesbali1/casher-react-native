import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { db } from "./database";
import { Product } from "./types";

/* =====================
   PRODUCTS
===================== */
export const getProducts = async (
    limit = 50,
    offset = 0
): Promise<Product[]> => {
    return await db.getAllAsync<Product>(
        "SELECT * FROM products LIMIT ? OFFSET ?",
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
    const trxId = uuidv4();
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
