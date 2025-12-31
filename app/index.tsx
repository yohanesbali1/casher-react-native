import * as React from 'react';
import { View } from 'react-native';
import AppBar from './app.bar';
import ProductComp from './product';
import Sidebar from './sidebar';

export default function Main() {

    const data_checkout = [
        {
            id: 1,
            name: "Nasi Goreng Spesial",
            image: "https://example.com/images/nasi-goreng-spesial.jpg",
            price: 25000
        }]
    return (
        <>
            <AppBar />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <ProductComp />
                <Sidebar data_checkout={data_checkout} />
            </View>
        </>
    );
}
