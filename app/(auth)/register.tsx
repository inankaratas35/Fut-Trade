import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View className="flex-1 bg-gaming-dark p-6 justify-center items-center">
      <View className="items-center mb-10">
        <View className="w-20 h-20 bg-gaming-slate rounded-full border-2 border-gaming-neon justify-center items-center mb-4">
          <Text className="text-3xl">⚽</Text>
        </View>
        <Text className="text-2xl font-bold text-gaming-neon">Create Account</Text>
      </View>

      <View className="w-full bg-gaming-slate p-6 rounded-xl border border-gray-800">
        <TextInput
          className="bg-gaming-dark text-white p-4 rounded-lg mb-4 border border-gray-700"
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          className="bg-gaming-dark text-white p-4 rounded-lg mb-4 border border-gray-700"
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          className="bg-gaming-dark text-white p-4 rounded-lg mb-6 border border-gray-700"
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-gaming-gold p-4 rounded-lg items-center mb-4"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-gaming-dark font-bold text-lg">Sign Up</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-2">
          <Text className="text-gray-400">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-gaming-neon font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
