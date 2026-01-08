import { useCartData } from "@/hooks/cart/useCartData";
import { useResetCart } from "@/hooks/cart/useResetCart";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function HeaderSidebar() {
    const { resetCart } = useResetCart()
    const { cart_products: data } = useCartData()
    return (
        <>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
                <View>
                    <Text style={{ fontFamily: 'Opensans-Bold', color: '#0f172a', fontSize: 18 }}>Pesanan</Text>
                    <Text style={{ fontFamily: 'Opensans-Medium', color: '#64748b', fontSize: 12 }}>Jumlah Pesanan {data?.length} item</Text>
                </View>
                <View>
                    <Pressable style={{
                        backgroundColor: '#F1F5F9', width: 30,
                        height: 30, justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#e5e7eb',
                        borderRadius: 8
                    }} onPress={() => resetCart()}>
                        <Icon source={'delete'} size={18} color="#ef4444" />
                    </Pressable >
                </View>
            </View>
        </>
    )
}