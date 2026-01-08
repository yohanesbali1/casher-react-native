import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function NoItemProduct() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
            }}
        >
            <View
                style={{
                    backgroundColor: "rgb(19 127 236 / 0.1)",
                    width: 100,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#e2e8f0",
                    borderRadius: "100%",
                    marginBottom: 16
                }}
            >
                <Icon source={'food-variant-off'} size={52} color="#0079EB"></Icon>
            </View>
            <View>
                <Text style={{
                    color: '#111418',
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 14,
                    fontFamily: 'Opensans-Bold'
                }}>Produk Kosong
                </Text>
                <Text style={{
                    color: '#617589',
                    fontSize: 16,
                    textAlign: 'center',
                    maxWidth: 400,
                    fontFamily: 'Opensans-Rewegular'
                }}>Belum ada item yang ditambahkan. Mulai dengan menambahkan produk dari master data.
                </Text>

            </View>
        </View >
    )
}