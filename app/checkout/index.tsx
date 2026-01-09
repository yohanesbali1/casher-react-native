import { useShowTransaction } from "@/hooks/transaction/useShowTransaction";
import ItemStruck from "@/screens/struck/item";
import StoreStruck from "@/screens/struck/store";
import SumItemStruck from "@/screens/struck/sum_item";
import TitleStruck from "@/screens/struck/title";
import TotalStruck from "@/screens/struck/total";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, RefreshControl, ScrollView, ToastAndroid, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function Checkout() {
    const { id } = useLocalSearchParams()
    const { showTransaction, show_transaction_data: data } = useShowTransaction()
    const [busy, setBusy] = useState(false)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setBusy(true)
            await showTransaction(id as unknown as number)
        } catch (err: any) {
            ToastAndroid.showWithGravity(err, ToastAndroid.SHORT, ToastAndroid.TOP);
        } finally {
            setBusy(false)
        }
    }

    if (!data) return null

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={busy} onRefresh={getData} />
            }
        >
            <View style={{ flex: 1, padding: 32, }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 1, maxWidth: 480, gap: 24 }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 32, paddingVertical: 32 }}>
                            <StoreStruck />
                            <TitleStruck data={data} />
                            <ItemStruck data={data} />
                            <SumItemStruck data={data} />
                            <TotalStruck data={data} />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 12 }}>
                            <Pressable style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#137fec', padding: 16, borderRadius: 8, alignItems: 'center' }}>
                                    <Icon source={'printer'} size={20} color="white"></Icon>
                                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Opensans-Bold', fontSize: 16, marginLeft: 4 }}>Cetak Struk</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => router.back()} style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', padding: 16, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#dbe0e6' }}>
                                    <Icon source={'plus'} size={20} color="#111418"></Icon>
                                    <Text style={{ textAlign: 'center', color: '#111418', fontFamily: 'Opensans-Bold', fontSize: 16, marginLeft: 4 }}>Transaksi Baru</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}