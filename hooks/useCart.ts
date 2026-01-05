import { cartStore } from "@/store/cart/cart.store";
import { useStore } from "zustand";

export const useCart = () => {

    const loading = useStore(cartStore, s => s.loading);
    const cart_data = useStore(cartStore, s => s.cart_data);
    const postCart = useStore(cartStore, s => s.postCart);
    const updateCart = useStore(cartStore, s => s.updateCart);
    const resetCart = useStore(cartStore, s => s.resetCart);

    const addCart = (data: any) => {
        let payload = { ...data, qty: 1 };
        postCart(payload);
    };

    const changeQty = (id: number, qty: number) => {
        updateCart(id, qty);
    };

    return {
        cart_data,
        cart_products: cart_data?.product ?? [],
        loading,
        addCart,
        changeQty,
        resetCart
    };
};
