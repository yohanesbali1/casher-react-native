import { useCategory } from "@/hooks/category/useCategory";
import { useProduct } from "@/hooks/product/useProduct";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Icon, Text } from "react-native-paper";

export function ItemGroup(payload: any) {
    const { item, changeCategoryProduct, select_category } = payload;
    return (
        <>

            <Pressable onPress={() => changeCategoryProduct(item.id)} >
                <View style={{
                    flexDirection: 'row', gap: 6, backgroundColor: select_category == item.id ? '#137fec' : '#F1F5F9',
                    paddingVertical: 10,
                    boxShadow: '0 1px 2px 0 #137fec4d',
                    borderColor: select_category == item.id ? '#137fec' : '#e5e7eb',
                    borderWidth: 1,
                    paddingHorizontal: 16, borderRadius: 8,

                }}>
                    <Icon source={item.icon} size={20} color={select_category == item.id ? 'white' : "#334155"} />
                    <Text style={{ fontFamily: select_category == item.id ? 'Opensans-Bold' : 'Opensans-Medium', color: select_category == item.id ? 'white' : '#334155', fontSize: 14 }}>{item.name}</Text>
                </View >
            </Pressable >
            {item.id == 'ALL' &&
                <View style={{
                    width: 1,
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: '60%',
                    backgroundColor: '#cbd5e1'
                }} />
            }
        </>
    )
}

export default function GroupProduct() {
    const { category_data } = useCategory()
    const { getProducts } = useProduct();
    const [select_category, setSelectCategory] = useState('All');
    const changeCategoryProduct = async (category_id: string) => {
        setSelectCategory(category_id);
        await getProducts(category_id);
    };
    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', paddingHorizontal: 14, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#e2e8f0' }}>
                <ScrollView horizontal  >
                    <View style={{ flex: 1, flexDirection: 'row', gap: 12 }}>
                        {category_data.map((item: any) => (
                            <ItemGroup select_category={select_category} changeCategoryProduct={changeCategoryProduct} key={item.id} item={item} />
                        ))}
                    </View>
                </ScrollView>
            </View >
        </>
    )
}
