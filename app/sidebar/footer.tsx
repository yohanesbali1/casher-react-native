import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function FooterSidebar() {

    return (
        <>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#F8FAFC", borderTopWidth: 1, borderTopColor: '#E0E0E0', gap: 2 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                    <Text variant="bodyMedium" style={{ flex: 1, color: '#66788F', fontFamily: 'Opensans-Medium' }}>Subtotal</Text>
                    <Text variant="bodyMedium" style={{ flex: 1, color: '#66788F', textAlign: 'right', fontFamily: 'Opensans-Medium' }}>Rp 37000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                    <Text variant="bodyMedium" style={{ flex: 1, color: '#66788F', fontFamily: 'Opensans-Medium' }}>Tax (10%)</Text>
                    <Text variant="bodyMedium" style={{ flex: 1, textAlign: 'right', color: '#66788F', fontFamily: 'Opensans-Medium' }}>Rp 3700</Text>
                </View>

                <View style={{ paddingVertical: 12, backgroundColor: "#F8FAFC", borderTopWidth: 1, borderTopColor: '#E0E0E0', borderStyle: 'dashed', gap: 20, paddingTop: 15, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                        <Text variant="bodyLarge" style={{ flex: 1, fontFamily: 'Opensans-Bold' }}>TOTAL</Text>
                        <Text variant="headlineMedium" style={{ flex: 1, textAlign: 'right', fontFamily: 'Opensans-Bold' }}>Rp 37000</Text>
                    </View>
                    <Pressable onPress={() => console.log('asd')} style={{ marginTop: 12, backgroundColor: '#137FEC', boxShadow: '0px 1px 5px rgba(170, 209, 248, 0.99)', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                            <Text variant="bodyMedium" style={{ textAlign: 'center', color: 'white', fontFamily: 'Opensans-Bold' }}>Proses Payment</Text>
                            <Icon source={'arrow-right'} size={20} color="white" />
                        </View>
                    </Pressable>
                </View>
            </View>


        </>
    )
}