import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function CommunityScreen() {
  return (
    <View className="flex-1 bg-gaming-dark">
      <View className="flex-row p-4 border-b border-gaming-slate">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'General', 'Trade Advice', 'Squad Help', 'Evolutions'].map((cat, i) => (
            <TouchableOpacity key={i} className={`mr-2 px-4 py-2 rounded-full ${i === 0 ? 'bg-gaming-neon' : 'bg-gaming-slate'}`}>
              <Text className={`${i === 0 ? 'text-gaming-dark' : 'text-white'} font-bold`}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1 p-4">
        <View className="bg-gaming-slate p-4 rounded-lg mb-4">
          <View className="flex-row items-center mb-2">
            <View className="w-8 h-8 rounded-full bg-gray-500 mr-2" />
            <Text className="text-white font-bold">FifaGod99</Text>
            <Text className="text-gray-500 text-xs ml-2">2h ago</Text>
          </View>
          <Text className="text-white text-lg font-bold mb-2">Best CM for 100k?</Text>
          <Text className="text-gray-400 mb-4">Looking for a B2B midfielder to link with Vini. Any suggestions?</Text>
          <View className="flex-row">
            <Text className="text-gray-500 mr-4">👍 12</Text>
            <Text className="text-gray-500">💬 5</Text>
          </View>
        </View>

        <View className="bg-gaming-slate p-4 rounded-lg mb-4">
          <View className="flex-row items-center mb-2">
            <View className="w-8 h-8 rounded-full bg-gaming-gold mr-2" />
            <Text className="text-gaming-gold font-bold">TraderMark</Text>
            <View className="bg-gaming-neon px-1 rounded ml-2">
              <Text className="text-gaming-dark text-[10px] font-bold">VERIFIED TRADER</Text>
            </View>
          </View>
          <Text className="text-white text-lg font-bold mb-2">Market is crashing!</Text>
          <Text className="text-gray-400 mb-4">Sell your meta golds now before the promo drops tomorrow.</Text>
          <View className="flex-row">
            <Text className="text-gray-500 mr-4">👍 145</Text>
            <Text className="text-gray-500">💬 32</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
