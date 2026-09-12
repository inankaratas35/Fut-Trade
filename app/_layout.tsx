import { Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../tailwind.css";

export default function RootLayout() {
  // In a real app, you'd check auth state. We'll start at the login screen for this flow.
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
