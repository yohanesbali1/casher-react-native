import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

// Screen components
function CategoryScreen() {
    return (
        <View style={styles.screen}>
            <Text>Category Screen</Text>
        </View>
    );
}

function ProductScreen() {
    return (
        <View style={styles.screen}>
            <Text>Product Screen</Text>
        </View>
    );
}

function TransaksiScreen() {
    return (
        <View style={styles.screen}>
            <Text>Transaksi Screen</Text>
        </View>
    );
}

// Custom drawer content
function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            {/* Master Data Header */}
            <Text style={styles.header}>Master Data</Text>
            <DrawerItem
                label="Category"
                onPress={() => props.navigation.navigate('Category')}
            />
            <DrawerItem
                label="Product"
                onPress={() => props.navigation.navigate('Product')}
            />

            {/* Transaksi */}
            <Text style={styles.header}>Transaksi</Text>
            <DrawerItem
                label="Transaksi"
                onPress={() => props.navigation.navigate('Transaksi')}
            />
        </DrawerContentScrollView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Category"
                drawerContent={(props: any) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Category" component={CategoryScreen} />
                <Drawer.Screen name="Product" component={ProductScreen} />
                <Drawer.Screen name="Transaksi" component={TransaksiScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#555',
    }
});
