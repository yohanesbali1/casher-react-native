import { cartStore } from "@/store/cart/cart.store";
import { useStore } from "zustand";

export const useDeleteCart = () => {
    const deleteCart = useStore(cartStore, s => s.deleteCart);
    return {
        deleteCart
    };
};
