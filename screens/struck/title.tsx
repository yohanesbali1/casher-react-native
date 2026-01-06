import moment from "moment";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function TitleStruck(payload: any) {
    const { data } = payload
    return (
        <>
            <View style={{ paddingVertical: 16, borderBottomWidth: 2, borderStyle: 'dashed', borderBottomColor: '#e5e7eb' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#617589', fontSize: 14 }}>ID Transaksi</Text>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#111418', fontSize: 14 }}>#{data.transaction_number}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#617589', fontSize: 14 }}>Tanggal</Text>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#111418', fontSize: 14 }}>{moment(data.created_at).format('DD MMM YYYY')}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#617589', fontSize: 14 }}>Waktu</Text>
                    <Text style={{ fontFamily: 'Opensans-Regular', color: '#111418', fontSize: 14 }}>{moment(data.created_at).format('HH:mm:ss')} WIB</Text>
                </View>
            </View>
        </>
    )
}