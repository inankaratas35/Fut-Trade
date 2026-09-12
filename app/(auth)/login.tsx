import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-gaming-dark p-6 justify-center items-center">
      <View className="items-center mb-10">
        <View className="w-24 h-24 bg-gaming-slate rounded-full border-2 border-gaming-neon justify-center items-center mb-4">
          <Text className="text-4xl">⚽</Text>
        </View>
        <Text className="text-3xl font-bold text-gaming-neon">FUT Trade</Text>
        <Text className="text-gray-400">Welcome to FC 27 Companion</Text>
      </View>

      <View className="w-full bg-gaming-slate p-6 rounded-xl border border-gray-800">
        <TextInput
          className="bg-gaming-dark text-white p-4 rounded-lg mb-4 border border-gray-700"
          placeholder="Email or Username"
          placeholderTextColor="#888"
        />
        <TextInput
          className="bg-gaming-dark text-white p-4 rounded-lg mb-6 border border-gray-700"
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-gaming-neon p-4 rounded-lg items-center mb-4"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-gaming-dark font-bold text-lg">Login</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-2">
          <Text className="text-gray-400">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text className="text-gaming-neon font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
