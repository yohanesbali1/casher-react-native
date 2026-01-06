
export const UseStruck = () => {

    const struct_data = {
        id: "t1",
        transaction_number: "TRX-001",
        customer_name: "Budi",
        items: [
            {
                product_id: "p1",
                product_name: "Kopi Hitam",
                price: 10000000,
                quantity: 2,
                subtotal: 20000000
            },
            {
                product_id: "p2",
                product_name: "Teh Manis",
                price: 15000,
                quantity: 1,
                subtotal: 15000
            },
            {
                product_id: "p3",
                product_name: "Roti Bakar",
                price: 20000,
                quantity: 1,
                subtotal: 20000
            }
        ],
        sub_total: 55000,
        tax: 5500,
        total: 60500,
        created_at: new Date().toISOString()
    };



    return {
        struct_data
    };
};
