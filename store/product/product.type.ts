export interface ProductType {
    category_data: Category[];
    product_data: Product[];
    loading: boolean;
    error: string | null;

    getProducts: () => Promise<void>;
    getCategories: () => Promise<void>;
}

export interface Category {
    id: string;
    name: string;
}
export interface Product {
    product_id: string;
    product_name: string;
    price: number;
    stock: number;
    category_id: string;
    category_name: string;
}