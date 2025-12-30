import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function FooterSidebar() {
    return (
        <>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "#F8FAFC", borderTopWidth: 1, borderTopColor: '#E0E0E0' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                    <Text variant="bodyLarge" style={{ flex: 1 }}>Subtotal</Text>
                    <Text variant="bodyLarge" style={{ flex: 1, textAlign: 'right' }}>Rp 37000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                    <Text variant="bodyLarge" style={{ flex: 1 }}>Tax (10%)</Text>
                    <Text variant="bodyLarge" style={{ flex: 1, textAlign: 'right' }}>Rp 3700</Text>
                </View>

                <View style={{ paddingVertical: 12, backgroundColor: "#F8FAFC", borderTopWidth: 1, borderTopColor: '#E0E0E0', borderStyle: 'dashed' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3 }}>
                        <Text variant="bodyLarge" style={{ flex: 1 }}>Subtotal</Text>
                        <Text variant="bodyLarge" style={{ flex: 1, textAlign: 'right' }}>Rp 37000</Text>
                    </View>
                    <Button mode="contained" style={{ marginTop: 12 }}>Checkout</Button>
                </View>
            </View>


        </>
    )
}