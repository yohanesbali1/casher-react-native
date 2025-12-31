import { FlatList, View } from "react-native";
import GroupProduct from "./group";
import ItemProduct from "./item";


export default function Product() {

    const products = [
        {
            id: 1,
            name: "Nasi Goreng Spesial",
            image: "https://example.com/images/nasi-goreng-spesial.jpg",
            price: 25000
        },
        {
            id: 2,
            name: "Nasi Goreng Ayam",
            image: "https://example.com/images/nasi-goreng-ayam.jpg",
            price: 22000
        },
        {
            id: 3,
            name: "Mie Goreng Jawa",
            image: "https://example.com/images/mie-goreng-jawa.jpg",
            price: 20000
        },
        {
            id: 4,
            name: "Nasi Ayam Geprek",
            image: "https://example.com/images/ayam-geprek.jpg",
            price: 23000
        },
        {
            id: 5,
            name: "Nasi Goreng Seafood",
            image: "https://example.com/images/nasi-goreng-seafood.jpg",
            price: 30000
        },

        {
            id: 4,
            name: "Air Mineral",
            image: "https://example.com/images/ayam-geprek.jpg",
            price: 5000
        },
        {
            id: 5,
            name: "Es Teh Manis",
            image: "https://example.com/images/nasi-goreng-seafood.jpg",
            price: 5000
        }
    ];


    return (
        <>
            <View style={{ backgroundColor: '#F6F7F8' }}>
                <GroupProduct />
                <FlatList
                    data={products}
                    numColumns={5}
                    keyExtractor={item => item.id.toString()}
                    columnWrapperStyle={{ gap: 20 }}
                    contentContainerStyle={{ padding: 12 }}
                    renderItem={({ item }) => (
                        <ItemProduct item={item} />
                    )}
                />
            </View>
        </>
    )
}