import { db } from "./database";

export const migrate = async () => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      icon TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL,
      stock INTEGER,
      category_id TEXT
    );

    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      transaction_number TEXT NOT NULL UNIQUE,
      customer_name TEXT, 
      sub_total REAL,      
      tax REAL,           
      total REAL,         
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS transaction_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      transaction_id TEXT NOT NULL,
      product_name TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL,
      FOREIGN KEY (transaction_id) REFERENCES transactions(id)
  );

    CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message TEXT,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS transaction_sequence (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      last_number INTEGER
    );
    
    CREATE INDEX IF NOT EXISTS idx_transaction_items_transaction
      ON transaction_items(transaction_id);

    CREATE INDEX IF NOT EXISTS idx_product_category 
      ON products(category_id);
      
  `);
};
