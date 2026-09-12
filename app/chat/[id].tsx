import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams();

  // Mock data based on ID
  const chatName = id === '1' ? 'FifaGod99' : id === '2' ? 'TraderMark' : 'ProPlayer27';

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-gaming-dark"
    >
      {/* Custom Header */}
      <View className="flex-row items-center p-4 bg-gaming-slate border-b border-gray-800 pt-12">
        <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2">
          <Text className="text-white text-xl">{"<"}</Text>
        </TouchableOpacity>
        <View className="w-10 h-10 bg-gray-700 rounded-full justify-center items-center mr-3">
          <Text className="text-lg">👤</Text>
        </View>
        <View>
          <Text className="text-white font-bold text-lg">{chatName}</Text>
          <Text className="text-green-500 text-xs">Online</Text>
        </View>
      </View>

      {/* Messages Area */}
      <ScrollView className="flex-1 p-4">
        <View className="items-center my-4">
          <Text className="text-gray-500 text-xs">Today</Text>
        </View>

        <View className="flex-row mb-4">
          <View className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
            <Text className="text-white">Hey man, saw your squad on the community feed.</Text>
            <Text className="text-gray-500 text-[10px] text-right mt-1">10:42 AM</Text>
          </View>
        </View>

        <View className="flex-row mb-4">
          <View className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm max-w-[80%]">
            <Text className="text-white">Wanna run some co-op?</Text>
            <Text className="text-gray-500 text-[10px] text-right mt-1">10:42 AM</Text>
          </View>
        </View>

        <View className="flex-row justify-end mb-4">
          <View className="bg-gaming-neon p-3 rounded-2xl rounded-tr-sm max-w-[80%]">
            <Text className="text-gaming-dark font-medium">Yeah for sure! Let me finish this SBC first.</Text>
            <Text className="text-gray-700 text-[10px] text-right mt-1">10:45 AM</Text>
          </View>
        </View>
      </ScrollView>

      {/* Input Area */}
      <View className="flex-row p-4 bg-gaming-slate border-t border-gray-800 items-center pb-8">
        <TouchableOpacity className="mr-3">
          <Text className="text-2xl text-gray-400">+</Text>
        </TouchableOpacity>
        <TextInput
          className="flex-1 bg-gaming-dark text-white p-3 rounded-full border border-gray-700 px-4"
          placeholder="Message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity className="ml-3 bg-gaming-neon w-10 h-10 rounded-full justify-center items-center">
          <Text className="text-gaming-dark">➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
