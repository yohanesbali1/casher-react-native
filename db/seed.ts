import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { db } from "./database";

export const seedIfEmpty = async () => {
    const res = await db.getAllAsync<{ count: number }>(
        "SELECT COUNT(*) as count FROM products"
    );

    if (res[0].count > 0) return;

    const foodId = uuidv4();
    const drinkId = uuidv4();

    await db.runAsync(
        "INSERT INTO categories VALUES (?, ?)",
        [foodId, "Makanan"]
    );

    await db.runAsync(
        "INSERT INTO categories VALUES (?, ?)",
        [drinkId, "Minuman"]
    );

    await db.runAsync(
        "INSERT INTO products VALUES (?, ?, ?, ?, ?)",
        [uuidv4(), "Nasi Goreng", 15000, 50, foodId]
    );

    await db.runAsync(
        "INSERT INTO products VALUES (?, ?, ?, ?, ?)",
        [uuidv4(), "Es Teh", 5000, 100, drinkId]
    );
};
