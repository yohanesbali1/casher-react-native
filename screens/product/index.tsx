import LoadingProgres from "@/components/loading";
import { useCart } from "@/hooks/useCart";
import { FlatList, Text, View } from "react-native";
import { useProduct } from "../../hooks/useProduct";
import GroupProduct from "./group";
import ItemProduct from "./item";

export default function ProductComp() {
    const { GAP, ITEM_WIDTH, product_data, category_data, setContainerWidth, onRefresh, loading } = useProduct()
    const { addCart } = useCart()
    return (
        <>
            <View style={{ backgroundColor: '#F6F7F8', flex: 1 }}
                onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
                <GroupProduct category_data={category_data} />
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
                        <ItemProduct addCart={addCart} ITEM_WIDTH={ITEM_WIDTH} item={item} />
                    )}
                />
            </View>
            <LoadingProgres visible={loading} />
        </>
    )
}