import { migrate } from '@/db/migration';
import { seedIfEmpty } from '@/db/seed';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Opensans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
    'Opensans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'Opensans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'Opensans-Medium': require('../assets/fonts/OpenSans-Medium.ttf'),
    'Opensans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'Opensans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    (async () => {
      await migrate();
      await seedIfEmpty();
    })();
  }, []);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{
            headerShown: false,
          }} />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
