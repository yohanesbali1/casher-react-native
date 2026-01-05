import { productStore } from "@/store/product/product.store";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

export const useProduct = () => {

    const productData = useStore(productStore, s => s.product_data);
    const loading = useStore(productStore, s => s.loading);
    const getProducts = useStore(productStore, s => s.getProducts);

    const [containerWidth, setContainerWidth] = useState(0);
    const GAP = 16;
    const PADDING = 12 * 2;
    const NUM_COLUMNS = 4;

    const ITEM_WIDTH =
        containerWidth > 0
            ? (containerWidth - PADDING - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS
            : 0;


    useEffect(() => {
        getProducts();
    }, []);





    return {
        product_data: productData,
        loading,
        ITEM_WIDTH,
        GAP,
        setContainerWidth
    };
};
