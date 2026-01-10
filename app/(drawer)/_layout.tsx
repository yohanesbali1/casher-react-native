import AppBar from '@/components/app.bar';
import CustomDrawerContent from '@/components/sidebar';
import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {
    return (
        <>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent />}
                screenOptions={{
                    header: () => <>
                        <AppBar />
                    </>,
                    headerShown: false,
                }}
            >
            </Drawer>
        </>
    );
}
