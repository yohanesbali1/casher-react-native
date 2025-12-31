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
                    <Text variant="bodyMedium" style={{ fontFamily: 'Opensans-SemiBold', color: '#334155' }}>{item.title}</Text>
                </View >
            </Pressable >
        </>
    )
}

export default function GroupProduct() {

    const group = [{
        id: 1,
        title: 'Semua Item',
        icon: 'home'
    }, {
        id: 2,
        title: 'Makanan',
        icon: 'food-turkey'
    }, {
        id: 3,
        title: 'Minuman',
        icon: 'coffee'
    }]
    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
                <ScrollView horizontal >
                    {group.map((item: any) => (
                        <ItemGroup key={item.id} item={item} />
                    ))}
                </ScrollView>
            </View >
        </>
    )
}
