import { TransactionItem } from "./transaction.types";

//Validate Transaction
type ValidationResult =
    | { valid: true }
    | { valid: false; message: string };

export function validateTransaction(items: TransactionItem[]): ValidationResult {
    if (!items || items.length === 0) {
        return { valid: false, message: "Item transaksi tidak boleh kosong" };
    }

    for (const item of items) {
        if (!item.product_id) {
            return { valid: false, message: "Produk tidak valid" };
        }

        if (item.quantity <= 0) {
            return {
                valid: false,
                message: `Qty ${item.product_name} harus lebih dari 0`,
            };
        }

        if (item.price <= 0) {
            return {
                valid: false,
                message: `Harga ${item.product_name} tidak valid`,
            };
        }
    }

    return { valid: true };
}

//Calculate Subtotal
export function calculateSubTotal(items: TransactionItem[]) {
    return items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
}

//Calculate Tax
export function calculateTax(subTotal: number, taxRate = 0.11) {
    return subTotal * taxRate;
}


//Calculate Total
export function calculateTotal(subTotal: number, tax: number) {
    return subTotal + tax;
}



// User Auto Generator
let customerCounter = 0;
export function randomCustomerName(): string {
    customerCounter++;
    return `User${String(customerCounter).padStart(3, "0")}`;
}