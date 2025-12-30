import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ItemProduct(payload: any) {
    const { item } = payload;
    return (
        <>
            <View>
                <Text>{item.name}</Text>
            </View>
        </>
    )
}