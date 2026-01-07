import { cartStore } from "@/store/cart/cart.store";
import { useStore } from "zustand";

export const useCartData = () => {

    const loading = useStore(cartStore, s => s.loading);
    const cart_data = useStore(cartStore, s => s.cart_data);

    return {
        cart_data,
        cart_products: cart_data?.product ?? [],
        loading
    };
};
