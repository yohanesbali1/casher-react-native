import { useNavigation } from "expo-router";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";
export default function AppBar() {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center', elevation: 4, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: 'rgb(19 127 236 / 0.1)' }} >
                    <Icon source={'store'} size={22} color="#0079EB"></Icon>
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: '#0f172a', fontWeight: 'bold' }}>Kasir Cepat</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <View style={{ width: 34, height: 34, justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' }} >
                        <Icon source={'menu'} size={22} color="#334155"></Icon>
                    </View>
                </Pressable>
            </View>
        </View >
    )
}