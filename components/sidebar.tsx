import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';

export default function CustomDrawerContent() {
    const navigation = useNavigation<any>(); // navigation sudah otomatis tersedia
    const [masterDataOpen, setMasterDataOpen] = useState(false);

    return (
        <View style={{
            flex: 1, backgroundColor: '#FFFFFF'
        }}>
            <View style={{ flexDirection: 'row', paddingVertical: 32, paddingHorizontal: 24, borderBottomColor: '#f0f2f4', borderBottomWidth: 1 }}>
                <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: 'rgb(19 127 236 / 0.1)' }} >
                    <Icon source={'store'} size={24} color="#0079EB"></Icon>
                </View>
                <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: '#0f172a', fontWeight: 'bold' }}>Kasir Cepat</Text>
                </View>
            </View>
            <View style={{ gap: 10, paddingHorizontal: 12, paddingVertical: 24 }}>
                <Pressable
                    onPress={() => setMasterDataOpen(!masterDataOpen)}
                    style={styles.menuItem}
                >
                    <Text style={styles.menuText}>Master Data</Text>
                </Pressable>

                {masterDataOpen && (
                    <View style={{ marginLeft: 20 }}>
                        <Pressable
                            onPress={() => navigation.navigate('kategori-produk')}
                            style={styles.subMenuItem}
                        >
                            <Text style={styles.subMenuText}>Kategori Produk</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate('produk')}
                            style={styles.subMenuItem}
                        >
                            <Text style={styles.subMenuText}>Produk</Text>
                        </Pressable>
                    </View>
                )}

                <Pressable
                    onPress={() => navigation.navigate('transaksi')}
                    style={styles.menuItem}
                >

                    <Text style={styles.menuText}>Transaksi</Text>
                </Pressable>

            </View>

            {/* Master Data */}
        </View>
    );
}

const styles = StyleSheet.create({
    menuItem: { paddingVertical: 10 },
    menuText: { fontSize: 16, fontWeight: 'bold' },
    subMenuItem: { paddingVertical: 8 },
    subMenuText: { fontSize: 14, color: '#555' },
});
