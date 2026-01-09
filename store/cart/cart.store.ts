
import { createStore } from "zustand";
import { initialState } from "./cart.state";
import { CartProduct, CartState } from "./cart.type";
import { calculateSummary } from "./cart.utils";



export const cartStore = createStore<CartState>((set, get) => ({
    ...initialState,
    postCart: async (data: CartProduct) => {
        set({ loading: true, });
        try {
            const payload = {
                product_id: data.product_id,
                product_name: data.product_name,
                quantity: data.quantity,
                price: data.price
            };
            const products = get().cart_data?.product ?? [];
            const index = products.findIndex(
                (item: any) => item.product_id === payload.product_id
            );
            const updatedProducts =
                index !== -1
                    ? products.map((item: any, i: number) =>
                        i === index
                            ? { ...item, quantity: item.quantity + payload.quantity }
                            : item
                    )
                    : [...products, payload];
            const { sub_total, tax, total } = calculateSummary(updatedProducts);
            set({ cart_data: { product: updatedProducts, sub_total, tax, total } });
        } catch (err: any) {
            set({ error: err?.message || "Failed to fetch user detail" as string });
        } finally {
            set({ loading: false });
        }
    },
    updateCart: async (id: number, quantity: number) => {
        set({ loading: true, });
        try {
            const products = get().cart_data?.product ?? [];
            const updatedProducts = products.map((item: any) => {
                return item.product_id === id ? { ...item, quantity: Math.min(99, Math.max(1, item.quantity + quantity)) } : item
            });

            const { sub_total, tax, total } = calculateSummary(updatedProducts);
            set({ cart_data: { product: updatedProducts, sub_total, tax, total } });
        } catch (err: any) {
            set({ error: err?.message || "Failed to fetch user detail" as string });
        } finally {
            set({ loading: false });
        }
    },
    deleteCart: async (id: number) => {
        set({ loading: true, error: undefined });

        try {
            const products = get().cart_data?.product ?? [];
            const updatedProducts = products.filter(
                (item) => item.product_id !== id
            );

            const { sub_total, tax, total } = calculateSummary(updatedProducts);
            set({ cart_data: { product: updatedProducts, sub_total, tax, total } });
        } catch (err: any) {
            set({ error: err?.message || 'Failed to update cart' });
        } finally {
            set({ loading: false });
        }
    },
    resetCart: async () => {
        set({ cart_data: undefined });
    }
}));
