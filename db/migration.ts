import { db } from "./database";

export const migrate = async () => {
    await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      price REAL,
      stock INTEGER,
      category_id TEXT
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id TEXT PRIMARY KEY NOT NULL,
      transaction_number TEXT,
      customer_name TEXT,
      total REAL,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS logs (
      id TEXT PRIMARY KEY NOT NULL,
      message TEXT,
      created_at TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_product_category 
      ON products(category_id);
  `);
};
