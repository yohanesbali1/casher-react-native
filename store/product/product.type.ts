export interface ProductType {
    category_data: Category[];
    product_data: Product[];
    loading: boolean;
    error: string | null;

    getProducts: (category_id?: string) => Promise<void>;
    getCategories: () => Promise<void>;
}

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