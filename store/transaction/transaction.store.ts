
import { createTransaction, getTransactionById } from "@/db/queries";
import { createStore } from "zustand";
import { initialState } from "./transaction.state";
import { Transaction, TransactionState } from "./transaction.type";



export const transactionStore = createStore<TransactionState>((set, get) => ({
    ...initialState,
    postTransaction: async (data: Transaction) => {
        set({ loading: true, });
        try {
            const response = await createTransaction(data);
            return {
                transaction_id: response?.transaction_id,
                transaction_number: response?.transaction_number
            }

        } catch (err: any) {
            set({ error: err?.message || "Failed to fetch user detail" as string });
            throw "Transaksi gagal";
        } finally {
            set({ loading: false });
        }
    },
    showTransaction: async (id: number) => {
        set({ loading: true, });
        try {
            const item = await getTransactionById(id);
            set({ show_transaction_data: item });
        } catch (err: any) {
            set({ error: err?.message || "Failed to fetch user detail" as string });
            throw "Data transaksi tidak ditemukan";
        } finally {
            set({ loading: false });
        }
    },
}));
