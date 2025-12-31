export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category_id: string;
}

export interface Transaction {
    id: string;
    transaction_number: string;
    customer_name: string;
    total: number;
    created_at: string;
}
