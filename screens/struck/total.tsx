import { formatNumber } from "@/helper/format_number";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function TotalStruck(payload: any) {
    const { data } = payload
    return (
        <>
            <View style={{ paddingTop: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Bold', color: '#111418', fontSize: 16 }}>TOTAL</Text>
                    <Text style={{ fontFamily: 'Opensans-Bold', color: '#137fec', fontSize: 20 }}>Rp {formatNumber(data.sub_total)}</Text>
                </View>
            </View>
        </>
    )
}