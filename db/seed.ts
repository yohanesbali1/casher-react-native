import * as Crypto from "expo-crypto";
import { db } from "./database";

export const seedIfEmpty = async () => {
    const res = await db.getAllAsync<{ count: number }>(
        "SELECT COUNT(*) as count FROM products"
    );

    if (res[0].count > 0) return;

    // 🔥 ID STATIS untuk master data
    const FOOD_ID = "FOOD";
    const DRINK_ID = "DRINK";

    // === CATEGORIES ===
    await db.runAsync(
        "INSERT OR IGNORE INTO categories (id, name) VALUES (?, ?)",
        [FOOD_ID, "Makanan"]
    );

    await db.runAsync(
        "INSERT OR IGNORE INTO categories (id, name) VALUES (?, ?)",
        [DRINK_ID, "Minuman"]
    );

    const products = [
        // 🍛 Makanan
        { name: "Nasi Goreng", price: 15000, stock: 50, category_id: FOOD_ID },
        { name: "Mie Goreng", price: 14000, stock: 40, category_id: FOOD_ID },
        { name: "Mie Rebus", price: 13000, stock: 45, category_id: FOOD_ID },
        { name: "Ayam Geprek", price: 18000, stock: 30, category_id: FOOD_ID },
        { name: "Ayam Bakar", price: 20000, stock: 25, category_id: FOOD_ID },
        { name: "Ayam Goreng", price: 17000, stock: 35, category_id: FOOD_ID },
        { name: "Sate Ayam", price: 22000, stock: 20, category_id: FOOD_ID },
        { name: "Bakso", price: 15000, stock: 50, category_id: FOOD_ID },
        { name: "Soto Ayam", price: 16000, stock: 40, category_id: FOOD_ID },
        { name: "Nasi Uduk", price: 12000, stock: 60, category_id: FOOD_ID },

        // 🧃 Minuman
        { name: "Es Teh", price: 5000, stock: 100, category_id: DRINK_ID },
        { name: "Es Jeruk", price: 7000, stock: 80, category_id: DRINK_ID },
        { name: "Teh Hangat", price: 4000, stock: 70, category_id: DRINK_ID },
        { name: "Kopi Hitam", price: 8000, stock: 50, category_id: DRINK_ID },
        { name: "Kopi Susu", price: 10000, stock: 45, category_id: DRINK_ID },
        { name: "Es Kopi Susu", price: 12000, stock: 40, category_id: DRINK_ID },
        { name: "Jus Alpukat", price: 15000, stock: 30, category_id: DRINK_ID },
        { name: "Jus Mangga", price: 14000, stock: 30, category_id: DRINK_ID },
        { name: "Air Mineral", price: 3000, stock: 200, category_id: DRINK_ID },
        { name: "Soda", price: 9000, stock: 35, category_id: DRINK_ID },
    ];

    for (const p of products) {
        await db.runAsync(
            "INSERT INTO products (id, name, price, stock, category_id) VALUES (?, ?, ?, ?, ?)",
            [
                Crypto.randomUUID(),
                p.name,
                p.price,
                p.stock,
                p.category_id,
            ]
        );
    }
};
