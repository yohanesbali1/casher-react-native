import { formatNumber } from "@/helper/format_number";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ItemStruck(payload: any) {
    const { data } = payload
    return (
        <>
            <View style={{ paddingVertical: 16, borderBottomWidth: 2, borderStyle: 'dashed', borderBottomColor: '#e5e7eb' }} >

                <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
                    <Text style={{ textAlign: 'left', color: '#617589', flex: 1, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>ITEM</Text>
                    <Text style={{ textAlign: 'center', color: '#617589', width: 60, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>QTY</Text>
                    <Text style={{ textAlign: 'center', color: '#617589', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>HARGA</Text>
                    <Text style={{ textAlign: 'right', color: '#617589', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>TOTAL</Text>
                </View>
                {data && data.product.length > 0 ? data.product.map((item: any, index: number) => (
                    <View key={index} style={{ flexDirection: 'row', paddingVertical: 5 }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, fontFamily: 'Opensans-Medium', color: '#111418' }} >{item.product_name}</Text>
                        </View>
                        <View style={{ width: 40, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Opensans-Regular', color: '#617589', alignSelf: 'center', fontSize: 14, alignItems: 'center' }}>{item.quantity}</Text>
                        </View>
                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 12, color: '#617589', fontFamily: 'Opensans-Regular' }}>{formatNumber(item.price)}</Text>
                        </View>
                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'right', flex: 1, color: '#111418', fontFamily: 'Opensans-Medium', fontSize: 14 }}>{formatNumber(item.price * item.quantity)}</Text>
                        </View>
                    </View>
                )) : <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 12 }}>
                    <Text style={{ textAlign: 'center', color: '#64748b', fontFamily: 'Opensans-Medium', fontSize: 14 }}>Tidak ada data</Text>
                </View>}
            </View>
        </>

    )
}