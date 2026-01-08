import { calculateSubTotal, calculateTax, calculateTotal, randomCustomerName, validateTransaction } from "@/logic/transaction/transaction.logic";
import { TransactionItem } from "@/logic/transaction/transaction.types";
import { transactionStore } from "@/store/transaction/transaction.store";
import { useState } from "react";
import { useStore } from "zustand";

export const usePostTransaction = () => {

    const loading = useStore(transactionStore, s => s.loading);
    const postTransaction = useStore(transactionStore, s => s.postTransaction);
    const [busy, setBusy] = useState(false);

    const submit = async (product: TransactionItem[]) => {
        setBusy(true);
        const validation = validateTransaction(product);
        if (!validation.valid) {
            throw new Error(validation.message);
        }

        const subTotal = calculateSubTotal(product);
        const tax = calculateTax(subTotal);
        const total = calculateTotal(subTotal, tax);

        const customer_name = randomCustomerName();

        let payload = {
            customer_name: customer_name,
            product: product,
            sub_total: subTotal,
            tax,
            total
        }
        try {
            await postTransaction(payload);
        } finally {
            setBusy(false);
        }
    };

    return {
        submit,
        loading,
        busy
    };
};
