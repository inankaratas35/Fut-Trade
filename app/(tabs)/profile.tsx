import { View, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [onlineStatus, setOnlineStatus] = useState('Online');

  const getStatusColor = () => {
    switch(onlineStatus) {
      case 'Online': return 'bg-green-500';
      case 'Do Not Disturb': return 'bg-red-500';
      case 'Invisible': return 'bg-gray-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <View className="flex-1 bg-gaming-dark p-4 items-center">
      <View className="relative mb-4 mt-8">
        <View className="w-28 h-28 rounded-full bg-gaming-slate border-2 border-gaming-neon justify-center items-center">
          <Text className="text-5xl">👤</Text>
        </View>
        <View className={`absolute bottom-0 right-2 w-6 h-6 rounded-full border-2 border-gaming-dark ${getStatusColor()}`} />
        <TouchableOpacity className="absolute top-0 right-0 bg-gaming-slate p-2 rounded-full border border-gray-600">
          <Text className="text-xs">📸</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-2xl font-bold text-white mb-1">TraderMark</Text>
      <Text className="text-gaming-gold mb-6 font-bold">Trade Plus Member</Text>

      <View className="w-full bg-gaming-slate p-4 rounded-lg mb-4">
        <Text className="text-gray-400 font-bold mb-3 uppercase text-xs">Online Status</Text>
        <View className="flex-row justify-between mb-2">
          {['Online', 'Do Not Disturb', 'Invisible'].map((status) => (
            <TouchableOpacity
              key={status}
              onPress={() => setOnlineStatus(status)}
              className={`px-3 py-2 rounded-lg ${onlineStatus === status ? 'bg-gaming-neon' : 'bg-gray-800'}`}
            >
              <Text className={onlineStatus === status ? 'text-gaming-dark font-bold text-xs' : 'text-gray-300 text-xs'}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="w-full bg-gaming-slate p-4 rounded-lg mb-4">
        <TouchableOpacity className="py-3 border-b border-gray-700 flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">My Squads</Text>
          <Text className="text-gray-500">{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 border-b border-gray-700 flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">Edit Profile</Text>
          <Text className="text-gray-500">{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">Settings</Text>
          <Text className="text-gray-500">{">"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="w-full bg-red-600 p-4 rounded-lg items-center mt-auto mb-4"
        onPress={() => router.replace('/(auth)/login')}
      >
        <Text className="text-white font-bold text-lg">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
