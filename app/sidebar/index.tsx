import { View } from "react-native";
import FooterSidebar from "./footer";
import HeaderSidebar from "./header";
import ItemSidebar from "./item";

export default function Sidebar(payload: any) {
    const { data_checkout } = payload;
    return (
        <>
            <View style={{ flex: 1, maxWidth: 400, backgroundColor: 'white', borderLeftWidth: 1, borderColor: '#e2e8f0' }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <HeaderSidebar />
                    <View style={{ flex: 1 }}>
                        <ItemSidebar data={data_checkout} />
                    </View>
                    <FooterSidebar />
                </View>
            </View>
        </>
    )
}