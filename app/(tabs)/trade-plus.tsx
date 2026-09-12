import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function TradePlusScreen() {
  // In a real app, you'd check role from auth state
  const isTradePlusMember = false;

  if (!isTradePlusMember) {
    return (
      <View className="flex-1 bg-gaming-dark p-6 justify-center items-center">
        <View className="bg-gaming-slate p-8 rounded-xl w-full items-center border border-gaming-gold">
          <Text className="text-3xl font-bold text-gaming-gold mb-4 text-center">Trade Plus</Text>
          <Text className="text-gray-300 text-center mb-6">
            Get exclusive market signals, investment strategies, and flipping targets from top verified traders.
          </Text>
          <TouchableOpacity className="bg-gaming-gold px-6 py-3 rounded-full w-full">
            <Text className="text-gaming-dark font-bold text-center text-lg">Upgrade Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gaming-dark p-4">
      <Text className="text-2xl font-bold text-gaming-gold mb-4">VIP Signals</Text>

      <View className="bg-gaming-slate p-4 rounded-lg mb-4 border-l-4 border-gaming-neon">
        <View className="flex-row justify-between mb-2">
          <Text className="text-white font-bold text-xl">R. Leão (86 LW)</Text>
          <Text className="text-gaming-neon font-bold">Flipping</Text>
        </View>
        <Text className="text-gray-400 mb-2">Target Buy: 45k</Text>
        <Text className="text-gray-400 mb-2">Target Sell: 55k</Text>
        <Text className="text-gray-400 mb-4">Risk: Medium</Text>
        <Text className="text-gray-300 italic">"Good out of pack investment for the upcoming WL." - Admin</Text>
      </View>
    </ScrollView>
  );
}
