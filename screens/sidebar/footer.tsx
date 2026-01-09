import { formatNumber } from "@/helper/format_number";
import { useCartData } from "@/hooks/cart/useCartData";
import { usePostTransaction } from "@/hooks/transaction/usePostTransaction";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ToastAndroid, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function FooterSidebar() {
    const { cart_data: data } = useCartData()
    const { porcessPayment, loading } = usePostTransaction()
    const [busy, setBusy] = useState(false)

    const isCartEmpty = !data || !data.product || data.product.length === 0
    const disabled = loading || busy || isCartEmpty

    const submitPayment = async () => {
        try {
            setBusy(true);
            await porcessPayment();
            router.push('/checkout');
        } catch (err: any) {
            ToastAndroid.showWithGravity(
                err.message,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        } finally {
            setBusy(false);
        }
    }
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
                <Pressable disabled={disabled} onPress={() => submitPayment()} style={{
                    marginTop: 12,
                    backgroundColor: disabled ? '#cbd5e1' : '#137FEC',
                    opacity: disabled ? 0.6 : 1,
                    boxShadow: '0px 1px 5px rgba(170, 209, 248, 0.99)',
                    paddingVertical: 16,
                    borderRadius: 8
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Opensans-Bold', fontSize: 18 }}>Proses Payment</Text>
                        <Icon source={'arrow-right'} size={20} color="white" />
                    </View>
                </Pressable>
            </View>
        </>
    )
}