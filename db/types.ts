export interface Category {
    id: string;
    name: string;
    icon: string;
}

export interface Product {
    product_id: string;
    product_name: string;
    price: number;
    stock: number;
    category_id: string;
    category_name: string;
}

export interface Transaction {
    id: string;
    transaction_number: string;
    customer_name: string;
    total: number;
    created_at: string;
}
