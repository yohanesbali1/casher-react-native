import { MAX_QTY, MIN_QTY, TAX_RATE } from "./cart.state";
import { CartProduct } from "./cart.type";

export const clampQty = (quantity: number): number =>
    Math.min(MAX_QTY, Math.max(MIN_QTY, quantity));

export const calculateSummary = (products: CartProduct[]) => {
    const sub_total = products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const tax = sub_total * TAX_RATE;
    const total = sub_total + tax;

    return { sub_total, tax, total };
};