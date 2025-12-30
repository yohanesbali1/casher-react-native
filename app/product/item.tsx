import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function ItemProduct(payload: any) {
    const { item } = payload;
    return (
        <>
            <View style={{ width: 160, height: 160, backgroundColor: 'white', marginBottom: 20, padding: 10, borderRadius: 8 }}>
                <Image source={{ uri: item.image }} style={{ flex: 1 }} />
                <Text variant="bodyMedium" style={{ fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                <Text variant="bodySmall" style={{ fontWeight: 'bold', color: '#0079EB' }}>Rp. {item.price}</Text>
            </View>
        </>
    )
}