import { View } from "react-native";
import FooterSidebar from "./footer";
import HeaderSidebar from "./header";
import ItemSidebar from "./item";

export default function Sidebar(payload: any) {
    const { data_checkout } = payload;
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderSidebar />
                <View style={{ flex: 1 }}>
                    <ItemSidebar data={data_checkout} />
                </View>
                <FooterSidebar />
            </View>
        </>
    )
}