import { Pressable, ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export function ItemGroup(payload: any) {
    const { item } = payload;
    return (
        <>
            <Pressable >
                <View style={{
                    flexDirection: 'row', gap: 6, backgroundColor: '#F1F5F9', paddingVertical: 5, paddingHorizontal: 16, borderRadius: 8, marginEnd: 10
                }}>
                    <Icon source={item.icon} size={20} color="#334155" />
                    <Text style={{ fontFamily: 'Opensans-Medium', color: '#334155', fontSize: 14 }}>{item.name}</Text>
                </View >
            </Pressable >
        </>
    )
}

export default function GroupProduct(payload: any) {
    const { category_data } = payload
    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 14, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#e2e8f0' }}>
                <ScrollView horizontal >
                    {category_data.map((item: any) => (
                        <ItemGroup key={item.id} item={item} />
                    ))}
                </ScrollView>
            </View >
        </>
    )
}
