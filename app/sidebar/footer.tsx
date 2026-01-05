import { formatNumber } from "@/helper/format_number";
import { useCart } from "@/hooks/useCart";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function FooterSidebar() {
    const { cart_data: data } = useCart()
    return (
        <>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#f8fafc", borderTopWidth: 1, borderTopColor: '#e2e8f0', gap: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ flex: 1, fontSize: 14, color: '#64748b', fontFamily: 'Opensans-Medium' }}>Subtotal</Text>
                    <Text style={{ flex: 1, fontSize: 14, color: '#334155', textAlign: 'right', fontFamily: 'Opensans-Bold' }}>Rp {formatNumber(data?.sub_total ?? 0)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ flex: 1, fontSize: 14, color: '#64748b', fontFamily: 'Opensans-Medium' }}>Tax (10%)</Text>
                    <Text style={{ flex: 1, fontSize: 14, textAlign: 'right', color: '#334155', fontFamily: 'Opensans-Bold' }}>Rp {formatNumber(data?.tax ?? 0)}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#e2e8f0', borderStyle: 'dashed' }}>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ flex: 1, fontFamily: 'Opensans-ExtraBold', color: '#0f172a', fontSize: 16 }}>TOTAL</Text>
                    <Text style={{ flex: 1, textAlign: 'right', fontFamily: 'Opensans-ExtraBold', fontSize: 30, color: '#137fec' }}>Rp {formatNumber(data?.total ?? 0)}</Text>
                </View>
                <Pressable onPress={() => console.log('asd')} style={{ marginTop: 12, backgroundColor: '#137FEC', boxShadow: '0px 1px 5px rgba(170, 209, 248, 0.99)', paddingVertical: 16, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Opensans-Bold', fontSize: 18 }}>Proses Payment</Text>
                        <Icon source={'arrow-right'} size={20} color="white" />
                    </View>
                </Pressable>
            </View>


        </>
    )
}