export interface TransactionState {
    loading: boolean;
    error: string | null;
    transaction_data: Transaction[];
    show_transaction_data?: Transaction;

    postTransaction: (data: Transaction) => Promise<void>;
    showTransaction: (id: string) => Promise<void>;


}

export type TransactionItem = {
    product_id?: number;
    product_name: string;
    price: number;
    quantity: number;
};

export interface Transaction {
    id?: number;
    transaction_number?: string;
    customer_name: string;
    product: TransactionItem[];
    sub_total: number;
    tax: number;
    total: number;
    created_at?: string;
}