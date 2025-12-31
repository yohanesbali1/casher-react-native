import { formatNumber } from "@/helper/format_number";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ItemProduct(payload: any) {
    const { item } = payload;
    return (
        <>
            <View style={{ width: 150, height: 140, backgroundColor: 'white', marginBottom: 20, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0' }}>
                <View style={{ flex: 1, gap: 5 }}>
                    <View style={{ backgroundColor: '#F1F5F9', alignSelf: 'flex-start', paddingHorizontal: 10, borderRadius: 8, paddingVertical: 5 }}>
                        <Text variant="labelSmall" style={{ color: '#0079EB', fontFamily: 'Opensans-Bold' }}>{item.category}</Text>
                    </View>
                    <Text variant="bodyMedium" style={{ marginBottom: 5, fontFamily: 'Opensans-Bold' }}  >{item.name}</Text>
                </View>
                <Text variant="titleMedium" style={{ color: '#0079EB', fontFamily: 'Opensans-Bold' }}>Rp. {formatNumber(item.price)}</Text>
            </View>
        </>
    )
}