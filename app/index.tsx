import { useCategory } from '@/hooks/category/useCategory';
import { useProduct } from '@/hooks/product/useProduct';
import { useEffect } from 'react';
import { View } from 'react-native';
import ProductComp from '../screens/product';
import Sidebar from '../screens/sidebar';

export default function Main() {
    const { getCategories } = useCategory();
    const { getProducts } = useProduct();

    useEffect(() => {
        getCategories();
        getProducts();
    }, [])
    return (
        <>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
                <View style={{ flex: 1 }}>
                    <ProductComp />
                </View>
                <Sidebar />
            </View>
        </>
    );
}
