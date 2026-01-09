import { transactionStore } from "@/store/transaction/transaction.store";
import { useStore } from "zustand";

export const useShowTransaction = () => {
    const show_transaction_data = useStore(transactionStore, s => s.show_transaction_data);
    const showTransaction = useStore(transactionStore, s => s.showTransaction);
    const loading = useStore(transactionStore, s => s.loading);

    return {
        showTransaction,
        show_transaction_data,
        loading
    };
};
