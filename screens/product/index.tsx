import LoadingProgres from "@/components/loading";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useProduct } from "../../hooks/product/useProduct";
import GroupProduct from "./group";
import ItemProduct from "./item";

export default function ProductComp() {
    const { product_data, loading, onRefresh } = useProduct()
    const [containerWidth, setContainerWidth] = useState(0);
    const GAP = 16;
    const PADDING = 12 * 2;
    const NUM_COLUMNS = 4;

    const ITEM_WIDTH =
        containerWidth > 0
            ? (containerWidth - PADDING - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS
            : 0;



    return (
        <>
            <View style={{ backgroundColor: '#F6F7F8', flex: 1 }}
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
                <GroupProduct />
                <FlatList
                    data={[...product_data]}
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
                    onRefresh={onRefresh}
                    refreshing={loading}
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
            <LoadingProgres visible={loading} />
        </>
    )
}