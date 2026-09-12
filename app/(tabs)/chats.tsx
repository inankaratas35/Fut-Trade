import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { router } from 'expo-router';

export default function ChatsListScreen() {
  const mockChats = [
    { id: '1', name: 'FifaGod99', lastMessage: 'Wanna run some co-op?', time: '2m', unread: 2, status: 'bg-green-500' },
    { id: '2', name: 'TraderMark', lastMessage: 'Buy those 83s now.', time: '1h', unread: 0, status: 'bg-red-500' },
    { id: '3', name: 'ProPlayer27', lastMessage: 'gg bro', time: '1d', unread: 0, status: 'bg-gray-500' }
  ];

  return (
    <View className="flex-1 bg-gaming-dark">
      <View className="p-4 bg-gaming-slate">
        <TextInput
          className="bg-gaming-dark text-white p-3 rounded-lg border border-gray-700"
          placeholder="Search messages..."
          placeholderTextColor="#888"
        />
      </View>
      <ScrollView className="flex-1 p-2">
        {mockChats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            onPress={() => router.push(`/chat/${chat.id}` as any)}
            className="flex-row items-center p-4 border-b border-gray-800"
          >
            <View className="relative mr-4">
              <View className="w-12 h-12 bg-gray-700 rounded-full justify-center items-center">
                <Text className="text-xl">👤</Text>
              </View>
              <View className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-gaming-dark ${chat.status}`} />
            </View>

            <View className="flex-1">
              <View className="flex-row justify-between mb-1">
                <Text className="text-white font-bold text-base">{chat.name}</Text>
                <Text className={chat.unread > 0 ? "text-gaming-neon font-bold text-xs" : "text-gray-500 text-xs"}>{chat.time}</Text>
              </View>
              <Text className={chat.unread > 0 ? "text-white" : "text-gray-400"} numberOfLines={1}>
                {chat.lastMessage}
              </Text>
            </View>

            {chat.unread > 0 && (
              <View className="w-6 h-6 bg-gaming-neon rounded-full justify-center items-center ml-2">
                <Text className="text-gaming-dark text-xs font-bold">{chat.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
