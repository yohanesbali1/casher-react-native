import { productStore } from "@/store/product/product.store";
import { useStore } from "zustand";

export const useProduct = () => {

    const product_data = useStore(productStore, s => s.product_data);
    const loading = useStore(productStore, s => s.loading);
    const getProducts = useStore(productStore, s => s.getProducts);
    const onRefresh = async () => {
        await getProducts();
    };


    return {
        product_data,
        loading,
        getProducts,
        onRefresh
    };
};
