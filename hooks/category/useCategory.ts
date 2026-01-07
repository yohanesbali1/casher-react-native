import { productStore } from "@/store/product/product.store";
import { useEffect } from "react";
import { useStore } from "zustand";

export const useCategory = () => {

    const loading = useStore(productStore, s => s.loading);
    const getCategories = useStore(productStore, s => s.getCategories);
    const category_data = useStore(productStore, s => s.category_data);


    useEffect(() => {
        getCategories();
        console.log('coba ini kategori')
    }, []);

    return {
        category_data,
        loading,
    };
};
