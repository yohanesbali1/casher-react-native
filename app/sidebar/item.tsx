import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function ItemSidebar(payload: any) {
    const { data } = payload;
    return (
        <>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }} >
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', borderTopWidth: 1, borderTopColor: '#E0E0E0', paddingVertical: 12 }}>
                    <Text variant="titleMedium" style={{ textAlign: 'left', width: 170 }}>Nama</Text>
                    <Text variant="titleMedium" style={{ textAlign: 'center', flex: 1 }}>Qty</Text>
                    <Text variant="titleMedium" style={{ textAlign: 'right', flex: 1 }}>Harga</Text>
                </View>
                {data.map((item: any) => (
                    <View key={item.id} style={{ flexDirection: 'row', paddingVertical: 12 }}>
                        <View style={{ width: 170 }}>
                            <Text variant="bodyLarge" style={{ textAlign: 'left', fontWeight: 'bold' }} >{item.name}</Text>
                            <Text variant="bodyMedium" style={{ textAlign: 'left' }}>Rp {item.price}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Pressable style={{ backgroundColor: '#F1F5F9', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'minus'} size={15} color="#0079EB"></Icon>
                            </Pressable>
                            <Text variant="bodyLarge" style={{ textAlign: 'center' }}>1</Text>
                            <Pressable style={{ backgroundColor: '#0079EB', width: 28, height: 28, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Icon source={'plus'} size={15} color="white"></Icon>
                            </Pressable>
                        </View>
                        <Text variant="bodyLarge" style={{ textAlign: 'right', flex: 1 }}>Rp {item.price}</Text>
                    </View>
                ))}
            </View>
        </>
    )
}
