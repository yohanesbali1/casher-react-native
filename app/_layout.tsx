import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function RootLayout() {

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
