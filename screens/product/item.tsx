import { dynamicColor } from "@/helper/color_dynamic";
import { formatNumber } from "@/helper/format_number";
import { useAddCart } from "@/hooks/cart/useAddCart";
import { CartProduct } from "@/store/cart/cart.type";
import { Pressable, ToastAndroid, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ItemProduct(payload: any) {
    const { item, ITEM_WIDTH } = payload;
    const { addCart } = useAddCart()
    const color = dynamicColor(item.category_name)
    const AddCartItem = async (product: CartProduct) => {
        try {
            await addCart(product);
        } catch (error) {
            ToastAndroid.showWithGravityAndOffset(
                "Transaksi berhasil",
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                0,
                120
            );
        }
    }
    return (
        <>
            <Pressable onPress={() => AddCartItem(item)} >
                <View style={{
                    width: ITEM_WIDTH,
                    backgroundColor: "white",
                    marginBottom: 16,
                    padding: 12,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#e5e7eb",
                    gap: 12,
                    minHeight: 160,
                }}>
                    <View
                        style={{
                            backgroundColor: color.bg,
                            alignSelf: 'flex-start',
                            paddingHorizontal: 8,
                            borderRadius: 4,
                            paddingVertical: 4,
                        }}
                    >
                        <Text
                            style={{
                                color: color.text,
                                letterSpacing: 0.5,
                                textTransform: 'uppercase',
                                fontSize: 10,
                                fontFamily: 'Opensans-Bold',
                            }}
                        >
                            {item.category_name}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginBottom: 5, fontSize: 16, fontFamily: 'Opensans-Bold', color: '#0f172a' }}  >{item.product_name}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Opensans-Regular', color: '#8899b0ff' }}  >{item.stock} Stok</Text>
                    </View>
                    <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#f1f5f9', borderTopWidth: 1, marginTop: 'auto', alignItems: 'center' }}>
                        <Text style={{ color: '#137fec', fontSize: 16, fontFamily: 'Opensans-Bold' }}>Rp. {formatNumber(item.price)}</Text>
                        <View style={{ flexDirection: 'row', gap: 8, backgroundColor: 'rgb(19 127 236 / 0.1)', width: 36, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }}>
                            <Icon source={'plus'} size={20} color="#137fec" />
                        </View>
                    </View>
                </View>
            </Pressable >
        </>
    )
}