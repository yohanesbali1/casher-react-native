import { Modal, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function LoadingProgres(payload: any) {
    const { visible } = payload

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <View style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.35)",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: 480,
                    backgroundColor: "white",
                    paddingVertical: 40,
                    paddingHorizontal: 40,
                    borderRadius: 16,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOpacity: 0.15,
                    gap: 25,
                    shadowRadius: 20,
                    elevation: 8,
                    borderTopWidth: 5,
                    borderColor: "#137feccc"
                }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <View
                            style={{
                                position: "absolute",
                                width: 120,
                                height: 120,
                                borderRadius: 999,
                                filter: "blur(20px)",
                                backgroundColor: "rgb(19 127 236 / 0.2)",
                            }}
                        />
                        <View
                            style={{
                                width: 80,
                                height: 80,
                                backgroundColor: "white",
                                borderRadius: 999,
                                borderWidth: 2,
                                borderColor: "rgba(19,127,236,0.1)",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <ActivityIndicator size={28} color="#137fec" />
                        </View>

                    </View>
                    <View style={{ gap: 5, alignItems: "center" }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#111418",
                            fontFamily: "Opensans-Bold"
                        }}>
                            Sedang Memproses
                        </Text>

                        <Text style={{
                            fontSize: 16,
                            color: "#111418",
                            fontFamily: "Opensans-Regular"
                        }}>
                            Mohon tunggu, sistem sedang memproses
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
