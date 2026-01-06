
import { getCategoriesStore, getProductsStore } from "@/db/queries";
import { createStore } from "zustand";
import { initialState } from "./product.state";
import { ProductType } from "./product.type";




export const productStore = createStore<ProductType>((set, get) => ({
    ...initialState,
    getCategories: async () => {
        set({ loading: true });
        try {
            const data = await getCategoriesStore();
            set({ category_data: data });
        } catch (err: any) {
            set({
                category_data: [],
                error: err?.message || "Failed to fetch category",
            });
            throw err;
        } finally {
            set({ loading: false });
        }
    },
    getProducts: async () => {
        set({ loading: true });
        try {
            const data = await getProductsStore();
            set({ product_data: data });
        } catch (err: any) {
            set({
                product_data: [],
                error: err?.message || "Failed to fetch product",
            });
            throw err;
        } finally {
            set({ loading: false });
        }
    },
}));