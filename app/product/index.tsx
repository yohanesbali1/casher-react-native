import { getProducts } from "@/db/queries";
import { Product } from "@/db/types";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import GroupProduct from "./group";
import ItemProduct from "./item";

export default function ProductComp() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);



    return (
        <>
            <View style={{ backgroundColor: '#F6F7F8' }}>
                <GroupProduct />
                <FlatList
                    data={[...products]}
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