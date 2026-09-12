import { View, Text, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gaming-dark p-4 items-center">
      <View className="w-24 h-24 rounded-full bg-gaming-slate mb-4 border-2 border-gaming-neon justify-center items-center">
        <Text className="text-4xl">👤</Text>
      </View>
      <Text className="text-2xl font-bold text-white mb-1">Guest User</Text>
      <Text className="text-gray-400 mb-6">Free Member</Text>

      <View className="w-full bg-gaming-slate p-4 rounded-lg mb-4">
        <TouchableOpacity className="py-3 border-b border-gray-700">
          <Text className="text-white font-bold text-lg">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 border-b border-gray-700">
          <Text className="text-gaming-gold font-bold text-lg">Get Trade Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3">
          <Text className="text-white font-bold text-lg">Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="w-full bg-red-600 p-4 rounded-lg items-center">
        <Text className="text-white font-bold text-lg">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
