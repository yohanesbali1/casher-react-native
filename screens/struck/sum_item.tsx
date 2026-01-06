import { formatNumber } from "@/helper/format_number";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function SumItemStruck(payload: any) {
    const { data } = payload
    return (
        <>
            <View style={{ paddingVertical: 16, borderBottomWidth: 1, borderStyle: 'dashed', borderBottomColor: '#e5e7eb' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#617589', fontSize: 14 }}>Subtotal</Text>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#111418', fontSize: 14 }}>Rp {formatNumber(data.sub_total)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#617589', fontSize: 14 }}>Pajak</Text>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#111418', fontSize: 14 }}>Rp {formatNumber(data.tax)}</Text>
                </View>
            </View>
        </>
    )
}