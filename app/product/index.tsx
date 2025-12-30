import { FlatList } from "react-native";
import ItemProduct from "./item";


export default function Product() {
    return (
        <>
            <FlatList
                data={[
                    { id: 1, name: 'Product 1' },
                    { id: 2, name: 'Product 2' }]}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                columnWrapperStyle={{ gap: 12 }}
                contentContainerStyle={{ padding: 12 }}
                renderItem={({ item }) => (
                    <ItemProduct item={item} />
                )}
            />
        </>
    )
}