import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function HeaderSidebar() {
    return (
        <>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
                <View>
                    <Text style={{ fontFamily: 'Opensans-Bold', color: '#0f172a', fontSize: 18 }}>Pesanan</Text>
                    <Text style={{ fontFamily: 'Opensans-Medium', color: '#64748b', fontSize: 12 }}>Tiket #INV-00001</Text>
                </View>
                <View>
                    <Pressable style={{ backgroundColor: '#F1F5F9', width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} onPress={() => console.log('Pressed')}>
                        <Icon source={'delete'} size={18} color="#F68D8E" />
                    </Pressable >
                </View>
            </View>
        </>
    )
}