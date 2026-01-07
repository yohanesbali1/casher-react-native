import { cartStore } from "@/store/cart/cart.store";
import { useStore } from "zustand";

export const useResetCart = () => {
    const resetCart = useStore(cartStore, s => s.resetCart);
    return {
        resetCart,
    };
};
