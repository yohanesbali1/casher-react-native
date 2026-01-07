import { buildAddCartPayload, validateAddCart } from "@/logic/cart/cart.logic";
import { cartStore } from "@/store/cart/cart.store";
import { CartProduct } from "@/store/cart/cart.type";
import { useStore } from "zustand";

export const useAddCart = () => {
    const postCart = useStore(cartStore, s => s.postCart);
    const addCart = (product: CartProduct) => {
        const validation = validateAddCart(product);
        if (!validation.valid) {
            throw new Error(validation.message);
        }
        const payload = buildAddCartPayload(product);
        postCart(payload);
    };

    return {
        addCart,
    };
};
