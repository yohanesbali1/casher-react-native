import { getProducts } from "@/db/queries";
import { Product } from "@/db/types";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import GroupProduct from "./group";
import ItemProduct from "./item";

export default function ProductComp() {
    const [products, setProducts] = useState<Product[]>([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const GAP = 16;
    const PADDING = 12 * 2;
    const NUM_COLUMNS = 4;

    const ITEM_WIDTH =
        containerWidth > 0
            ? (containerWidth - PADDING - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS
            : 0;

    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);





    return (
        <>
            <View style={{ backgroundColor: '#F6F7F8', flex: 1 }}
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
                <GroupProduct />
                <FlatList
                    data={[...products]}
                    numColumns={4}
                    keyExtractor={item => item.product_id.toString()}
                    columnWrapperStyle={{
                        gap: GAP,
                        justifyContent: "flex-start",
                    }}
                    contentContainerStyle={{
                        padding: 12,
                        alignItems: "flex-start",
                        flexGrow: 1
                    }}
                    ListEmptyComponent={
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text>Produk kosong</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <ItemProduct ITEM_WIDTH={ITEM_WIDTH} item={item} />
                    )}
                />
            </View>
        </>
    )
}