import { formatNumber } from "@/helper/format_number";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ItemSidebar(payload: any) {
    const { data } = payload;
    return (
        <>
            <View style={{ paddingHorizontal: 16 }} >
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', paddingVertical: 12 }}>
                    <Text style={{ textAlign: 'left', color: '#64748b', flex: 1, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>ITEM</Text>
                    <Text style={{ textAlign: 'center', color: '#64748b', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>QTY</Text>
                    <Text style={{ textAlign: 'right', color: '#64748b', width: 100, fontFamily: 'Opensans-SemiBold', fontSize: 12 }}>HARGA</Text>
                </View>
                {data.map((item: any) => (
                    <View key={item.id} style={{ flexDirection: 'row', paddingVertical: 12 }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, fontFamily: 'Opensans-Bold' }} >{item.name}</Text>
                            <Text style={{ textAlign: 'left', fontSize: 12, color: '#66788F', fontFamily: 'Opensans-regular' }}>Rp {formatNumber(item.price)}</Text>
                        </View>
                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                            <Pressable style={{ backgroundColor: '#F1F5F9', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'minus'} size={15} color="#0079EB"></Icon>
                            </Pressable>
                            <Text style={{ textAlign: 'center', fontFamily: 'Opensans-Bold', alignSelf: 'center', fontSize: 14, alignItems: 'center' }}>1</Text>
                            <Pressable style={{ backgroundColor: '#0079EB', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'plus'} size={15} color="white"></Icon>
                            </Pressable>
                        </View>
                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'right', flex: 1, fontFamily: 'Opensans-Bold', fontSize: 14 }}>Rp {formatNumber(400000)}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </>
    )
}
