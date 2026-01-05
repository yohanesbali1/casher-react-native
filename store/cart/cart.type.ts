export interface CartState {
    cart_data?: Cart;
    loading: boolean;
    error: string | null;

    postCart: (data: CartProduct) => Promise<void>;
    updateCart: (id: number, qty: number) => Promise<void>;
    deleteCart: (id: number) => Promise<void>;
    resetCart: () => Promise<void>;


}

export interface CartProduct {
    product_id: number;
    product_name: string;
    qty: number;
    price: number;
}

export interface Cart {
    product: CartProduct[];
    sub_total: number;
    tax: number;
    total: number
}

