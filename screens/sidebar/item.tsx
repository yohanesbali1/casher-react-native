import { formatNumber } from "@/helper/format_number";
import { useCartData } from "@/hooks/cart/useCartData";
import { useDeleteCart } from "@/hooks/cart/useDeleteCart";
import { useUpdateCart } from "@/hooks/cart/useUpdateCart";
import { Pressable, ScrollView, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Icon, Text } from "react-native-paper";
import Reanimated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

function RightAction(
    progress: SharedValue<number>,
    dragX: SharedValue<number>,
    product_id: number,
    deleteCart: (id: number) => Promise<void>,
) {
    const animatedStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            progress.value,
            [0, 1],
            [30, 0],   // 👉 dari kanan ke kiri
        );

        return {
            transform: [{ translateX }],
            opacity: progress.value,
        };
    });
    return (
        <Reanimated.View style={[animatedStyle, {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        }]}>
            <Pressable onPress={() => deleteCart(product_id)}>
                <View style={{ backgroundColor: '#F68D8E', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 28, height: 28, marginHorizontal: 8, borderRadius: 8 }}>
                    <Icon source={'delete'} size={15} color="white" />
                </View>
            </Pressable>
        </Reanimated.View>
    );
}


export default function ItemSidebar() {
    const { cart_products: data } = useCartData()
    const { changeQty } = useUpdateCart()
    const { deleteCart } = useDeleteCart()
    return (
        <>
            <View style={{ paddingHorizontal: 16, flex: 1 }} >

                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', paddingVertical: 12 }}>
                    <Text style={{ textAlign: 'left', color: '#64748b', flex: 1, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>ITEM</Text>
                    <Text style={{ textAlign: 'center', color: '#64748b', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>QTY</Text>
                    <Text style={{ textAlign: 'right', color: '#64748b', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>HARGA</Text>
                </View>
                <ScrollView style={{ flex: 1 }} >
                    {data.length > 0 ? data.map((item: any, index: number) => (

                        <GestureHandlerRootView key={index} >
                            <ReanimatedSwipeable
                                friction={2}
                                enableTrackpadTwoFingerGesture
                                renderRightActions={(progress, dragX) =>
                                    RightAction(progress, dragX, item.product_id, deleteCart)
                                }>
                                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ textAlign: 'left', fontSize: 14, fontFamily: 'Opensans-Bold' }} >{item.product_name}</Text>
                                        <Text style={{ textAlign: 'left', fontSize: 12, color: '#66788F', fontFamily: 'Opensans-regular' }}>Rp {formatNumber(item.price)}</Text>
                                    </View>
                                    <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                                        <Pressable
                                            disabled={item.qty <= 1}
                                            onPress={() => changeQty(item.product_id, -1)}
                                            style={(state) => ({
                                                backgroundColor: state.pressed
                                                    ? '#E2E8F0'
                                                    : item.qty <= 1
                                                        ? '#E5E7EB'
                                                        : '#F1F5F9',
                                                opacity: item.qty <= 1 ? 0.5 : 1,
                                                width: 28,
                                                height: 28,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 8,
                                            })}
                                        >
                                            <Icon source={'minus'} size={15} color="#0079EB"></Icon>
                                        </Pressable>
                                        <Text style={{ textAlign: 'center', fontFamily: 'Opensans-Bold', alignSelf: 'center', fontSize: 14, alignItems: 'center' }}>{item.qty}</Text>
                                        <Pressable
                                            disabled={item.qty >= 99}
                                            onPress={() => changeQty(item.product_id, 1)}
                                            style={{
                                                backgroundColor: item.qty >= 99 ? '#93C5FD' : '#0079EB',
                                                opacity: item.qty >= 99 ? 0.6 : 1,
                                                width: 28,
                                                height: 28,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 8,
                                            }}
                                        >
                                            <Icon source={'plus'} size={15} color="white"></Icon>
                                        </Pressable>
                                    </View>
                                    <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'right', flex: 1, fontFamily: 'Opensans-Bold', fontSize: 14 }}>Rp {formatNumber(item.price * item.qty)}</Text>
                                    </View>
                                </View>
                            </ReanimatedSwipeable>
                        </GestureHandlerRootView>
                    )) : <View style={{ paddingVertical: 12 }}>
                        <Text style={{ textAlign: 'center', color: '#64748b', fontFamily: 'Opensans-Medium', fontSize: 14 }}>Keranjang Kosong</Text>
                    </View>}
                </ScrollView>
            </View>
        </>
    )
}
