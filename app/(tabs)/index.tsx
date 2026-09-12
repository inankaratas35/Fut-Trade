import { View, Text, ScrollView } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-gaming-dark p-4">
      <Text className="text-2xl font-bold text-white mb-2">Welcome Back, Trader!</Text>
      <Text className="text-gray-400 mb-6">FC 27 Ultimate Team Hub</Text>

      {/* Quick Links / Widgets */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity
          className="flex-1 bg-gaming-slate p-4 rounded-xl mr-2 items-center border border-gray-700"
          onPress={() => router.push('/(tabs)/evolutions')}
        >
          <Text className="text-2xl mb-2">🧬</Text>
          <Text className="text-gaming-neon font-bold text-center">Evolutions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-gaming-slate p-4 rounded-xl mx-1 items-center border border-gray-700"
          onPress={() => router.push('/(tabs)/squad-builder')}
        >
          <Text className="text-2xl mb-2">⚽</Text>
          <Text className="text-gaming-gold font-bold text-center">Squads</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-gaming-slate p-4 rounded-xl ml-2 items-center border border-gray-700"
          onPress={() => router.push('/(tabs)/trade-plus')}
        >
          <Text className="text-2xl mb-2">📈</Text>
          <Text className="text-green-400 font-bold text-center">Market</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-bold text-gaming-neon mb-4">Active SBCs</Text>

      <View className="bg-gaming-slate p-4 rounded-lg mb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white font-bold text-lg">Daily Login Objective</Text>
          <View className="bg-gaming-neon px-2 py-1 rounded">
            <Text className="text-gaming-dark text-xs font-bold">23h left</Text>
          </View>
        </View>
        <Text className="text-gray-400 mb-2">Complete 3 daily matches.</Text>
        <Text className="text-gaming-gold font-bold">Reward: 80+ Player Pick</Text>
      </View>

      <View className="bg-gaming-slate p-4 rounded-lg mb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white font-bold text-lg">Marquee Matchups</Text>
          <View className="bg-red-500 px-2 py-1 rounded">
            <Text className="text-white text-xs font-bold">Live SBC</Text>
          </View>
        </View>
        <Text className="text-gray-400 mb-2">Build 4 squads for this week's top games.</Text>
        <Text className="text-gaming-gold font-bold">Cost: ~15k Coins</Text>
      </View>
    </ScrollView>
  );
}
