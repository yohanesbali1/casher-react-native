import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function StoreStruck() {
    return (
        <View style={{ justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 30, borderBottomWidth: 2, borderStyle: 'dashed', borderBottomColor: '#e5e7eb' }} >
            <View style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center', borderRadius: '100%', backgroundColor: 'rgb(19 127 236 / 0.1)', marginBottom: 16 }}>
                <Icon source={'store'} size={30} color="#0079EB"></Icon>
            </View >
            <Text style={{ fontFamily: 'Opensans-Bold', color: '#0f172a', fontSize: 18 }}>Kasir Cepat</Text>
        </View >
    )
}