import { productStore } from "@/store/product/product.store";
import { useStore } from "zustand";

export const useCategory = () => {

    const loading = useStore(productStore, s => s.loading);
    const getCategories = useStore(productStore, s => s.getCategories);
    const category_data = useStore(productStore, s => s.category_data);


    return {
        category_data,
        loading,
        getCategories
    };
};
