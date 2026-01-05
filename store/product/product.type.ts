export interface ProductType {
    product_data: Product[];
    loading: boolean;
    error: string | null;

    getProducts: () => Promise<void>;
}

export interface Product {
    product_id: string;
    product_name: string;
    price: number;
    stock: number;
    category_id: string;
    category_name: string;
}