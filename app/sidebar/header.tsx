import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function HeaderSidebar() {
    return (
        <>
            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 }}>
                <View>
                    <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>Pesanan</Text>
                    <Text variant="bodyLarge">Invoice #inv-00001</Text>
                </View>
                <View>
                    <Pressable style={{ backgroundColor: '#F1F5F9', width: 38, height: 38, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} onPress={() => console.log('Pressed')}>
                        <Icon source={'delete'} size={20} color="#F68D8E" />
                    </Pressable >
                </View>
            </View>
        </>
    )
}