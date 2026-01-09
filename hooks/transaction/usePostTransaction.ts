import { randomCustomerName, validateTransaction } from "@/logic/transaction/transaction.logic";
import { transactionStore } from "@/store/transaction/transaction.store";
import { useStore } from "zustand";

export const usePostTransaction = () => {

    const loading = useStore(transactionStore, s => s.loading);
    const postTransaction = useStore(transactionStore, s => s.postTransaction);

    const porcessPayment = async () => {
        if (!cart_data) {
            throw new Error("Keranjang masih kosong");
        }
        const product = cart_data.product ?? [];
        const validation = validateTransaction(product);
        if (!validation.valid) {
            throw new Error(validation.message);
        }
        const customer_name = randomCustomerName();

        let payload = {
            ...cart_data,
            customer_name: customer_name,
        }
        await postTransaction(payload);
        await resetCart();

    };

    return {
        porcessPayment,
        loading
    };
};
