import * as React from 'react';
import { View } from 'react-native';
import AppBar from './app.bar';
import ProductComp from './product';
import Sidebar from './sidebar';

export default function Main() {
    return (
        <>
            <AppBar />
            <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
                <View style={{ flex: 1 }}>
                    <ProductComp />
                </View>
                <Sidebar />
            </View>
        </>
    );
}
