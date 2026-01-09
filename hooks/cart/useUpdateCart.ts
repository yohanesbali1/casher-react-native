import { validateUpdateQty } from "@/logic/cart/cart.logic";
import { cartStore } from "@/store/cart/cart.store";
import { useStore } from "zustand";

export const useUpdateCart = () => {
    const cart_products = useStore(
        cartStore,
        s => s.cart_data?.product
    );
    const updateCart = useStore(cartStore, s => s.updateCart);
    const changeQty = async (id: number, quantity: number) => {
        const product = cart_products?.find(p => p.product_id === id);
        if (!product) {
            throw new Error("Produk tidak ditemukan di cart");
        }
        const validation = validateUpdateQty(product.quantity);
        if (!validation.valid) {
            throw new Error(validation.message);
        }
        await updateCart(id, quantity);
    };
    return {
        changeQty,
    };
};
