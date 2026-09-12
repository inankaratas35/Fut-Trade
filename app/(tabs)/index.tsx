import { View, Text, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-gaming-dark p-4">
      <Text className="text-2xl font-bold text-gaming-neon mb-4">FC 27 Tasks & SBCs</Text>

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
