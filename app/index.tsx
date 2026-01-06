import * as React from 'react';
import { View } from 'react-native';
import ProductComp from '../screens/product';
import Sidebar from '../screens/sidebar';

export default function Main() {
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
