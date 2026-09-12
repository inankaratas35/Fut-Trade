import { View, Text, ScrollView } from 'react-native';

export default function EvolutionsScreen() {
  return (
    <ScrollView className="flex-1 bg-gaming-dark p-4">
      <Text className="text-2xl font-bold text-gaming-neon mb-4">Evolution Hub</Text>

      <View className="flex-row mb-4">
        <View className="flex-1 bg-gaming-slate p-3 rounded-l-lg border-b-2 border-gaming-neon items-center">
          <Text className="text-gaming-neon font-bold">In-Evolution</Text>
        </View>
        <View className="flex-1 bg-gaming-slate p-3 rounded-r-lg items-center">
          <Text className="text-gray-400 font-bold">Base / Out</Text>
        </View>
      </View>

      <View className="bg-gaming-slate p-4 rounded-lg mb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-white font-bold text-lg">Pacey Winger II</Text>
          <Text className="text-gray-400 text-xs">Expires in 5d</Text>
        </View>
        <Text className="text-gray-400 mb-2">Max PAC: 85, Max OVR: 84</Text>
        <View className="flex-row gap-2 mb-2">
          <Text className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs">+3 PAC</Text>
          <Text className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs">+2 SHO</Text>
        </View>
        <Text className="text-gaming-neon text-sm mt-2">Recommended: A. Fati, M. Mudryk</Text>
      </View>
    </ScrollView>
  );
}
