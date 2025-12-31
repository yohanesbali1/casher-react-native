import { View } from "react-native";
import { Text } from "react-native-paper";

export default function AppBar() {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', elevation: 4, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
            <View style={{ width: 30, height: 30, backgroundColor: 'red' }} />
            <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Kasir Cepat</Text>
            </View>
        </View >
    )
}