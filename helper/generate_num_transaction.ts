export function generateTrxNumber(id: number) {
    const date = new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `TRX-${y}${m}${d}-${String(id).padStart(5, "0")}`;
}