import { CartProduct } from "@/store/cart/cart.type";

export function validateAddCart(
    product: CartProduct
) {
    if (!product.product_id) {
        return { valid: false, message: "Produk tidak valid" };
    }

    return { valid: true };
}

export function buildAddCartPayload(product: CartProduct) {
    return {
        ...product,
        quantity: 1,
    };
}

export function validateUpdateQty(
    quantity: number
) {
    if (quantity < 1) {
        return { valid: false, message: "Qty minimal 1" };
    }

    return { valid: true };
}