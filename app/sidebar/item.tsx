import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ItemSidebar(payload: any) {
    const { data } = payload;
    return (
        <>
            <View style={{ paddingHorizontal: 16 }} >
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', paddingVertical: 12 }}>
                    <Text variant="bodyMedium" style={{ textAlign: 'left', color: '#66788F', width: 170, fontFamily: 'Opensans-SemiBold' }}>ITEM</Text>
                    <Text variant="bodyMedium" style={{ textAlign: 'center', color: '#66788F', flex: 1, fontFamily: 'Opensans-SemiBold' }}>QTY</Text>
                    <Text variant="bodyMedium" style={{ textAlign: 'right', color: '#66788F', flex: 1, fontFamily: 'Opensans-SemiBold' }}>HARGA</Text>
                </View>
                {data.map((item: any) => (
                    <View key={item.id} style={{ flexDirection: 'row', paddingVertical: 12 }}>
                        <View style={{ width: 170 }}>
                            <Text variant="bodyMedium" style={{ textAlign: 'left', fontFamily: 'Opensans-Bold' }} >{item.name}</Text>
                            <Text variant="bodyMedium" style={{ textAlign: 'left', color: '#66788F', fontFamily: 'Opensans-regular' }}>Rp {item.price}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Pressable style={{ backgroundColor: '#F1F5F9', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'minus'} size={15} color="#0079EB"></Icon>
                            </Pressable>
                            <Text variant="bodyMedium" style={{ textAlign: 'center', fontFamily: 'Opensans-Bold' }}>1</Text>
                            <Pressable style={{ backgroundColor: '#0079EB', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'plus'} size={15} color="white"></Icon>
                            </Pressable>
                        </View>
                        <Text variant="bodyMedium" style={{ textAlign: 'right', flex: 1, fontFamily: 'Opensans-Bold' }}>Rp {item.price}</Text>
                    </View>
                ))}
            </View>
        </>
    )
}
