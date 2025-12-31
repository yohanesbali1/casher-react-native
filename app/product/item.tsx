import { formatNumber } from "@/helper/format_number";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function ItemProduct(payload: any) {
    const { item } = payload;
    return (
        <>
            <View style={{ width: 160, height: 160, backgroundColor: 'white', marginBottom: 20, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0' }}>
                <Image source={{ uri: item.image }} style={{ flex: 1 }} />
                <Text variant="bodyMedium" style={{ marginBottom: 5, fontFamily: 'Opensans-Bold' }} numberOfLines={1} >{item.name}</Text>
                <Text variant="bodySmall" style={{ color: '#0079EB', fontFamily: 'Opensans-Bold' }}>Rp. {formatNumber(item.price)}</Text>
            </View>
        </>
    )
}