import AppBar from '@/components/app.bar';
import LoadingProgres from '@/components/loading';
import { useCategory } from '@/hooks/category/useCategory';
import { useProduct } from '@/hooks/product/useProduct';
import { usePostTransaction } from '@/hooks/transaction/usePostTransaction';
import ProductComp from '@/screens/product';
import Sidebar from '@/screens/sidebar';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function Main() {
    const { getCategories } = useCategory();
    const { getProducts } = useProduct();
    const { loading } = usePostTransaction();

    useEffect(() => {
        getCategories();
        getProducts();
    }, [])
    return (
        <>
            <AppBar />
            <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
                <View style={{ flex: 1 }}>
                    <ProductComp />
                </View>
                <Sidebar />
            </View>
            <LoadingProgres visible={loading} />
        </>
    );
}
