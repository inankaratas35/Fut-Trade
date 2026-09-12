import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const PlayerSlot = ({ position, top, left }: { position: string, top: string, left: string }) => (
  <View className={`absolute ${top} ${left} items-center`} style={{ transform: [{ translateX: -30 }]}}>
    <TouchableOpacity className="w-16 h-20 bg-gaming-slate border border-gray-600 rounded-lg justify-center items-center opacity-80">
      <Text className="text-3xl">+</Text>
    </TouchableOpacity>
    <View className="bg-gaming-dark px-2 rounded-full border border-gray-600 mt-1">
      <Text className="text-white text-xs font-bold">{position}</Text>
    </View>
  </View>
);

export default function SquadBuilderScreen() {
  return (
    <View className="flex-1 bg-gaming-dark">
      <View className="p-4 bg-gaming-slate flex-row justify-between items-center z-10">
        <View>
          <Text className="text-white font-bold text-lg">My Starter Team</Text>
          <Text className="text-gaming-neon font-bold">4-3-3</Text>
        </View>
        <View className="flex-row gap-4 items-center">
          <View className="items-center">
            <Text className="text-gray-400 text-xs">OVR</Text>
            <Text className="text-white font-bold text-xl">82</Text>
          </View>
          <View className="items-center">
            <Text className="text-gray-400 text-xs">CHEM</Text>
            <Text className="text-gaming-gold font-bold text-xl">33</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        {/* Soccer Pitch Representation */}
        <View className="flex-1 bg-green-800 m-4 rounded-xl border-2 border-white overflow-hidden relative min-h-[500px]">
          {/* Pitch Lines */}
          <View className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white opacity-30" style={{ transform: [{ translateX: -1 }]}} />
          <View className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white rounded-full opacity-30" style={{ transform: [{ translateX: -40 }, { translateY: -40 }]}} />
          <View className="absolute top-0 left-1/4 right-1/4 h-20 border-2 border-white border-t-0 opacity-30" />
          <View className="absolute bottom-0 left-1/4 right-1/4 h-20 border-2 border-white border-b-0 opacity-30" />

          {/* Player Slots (4-3-3 Formation) */}
          {/* Attackers */}
          <PlayerSlot position="LW" top="top-[10%]" left="left-[20%]" />
          <PlayerSlot position="ST" top="top-[5%]" left="left-[50%]" />
          <PlayerSlot position="RW" top="top-[10%]" left="left-[80%]" />

          {/* Midfielders */}
          <PlayerSlot position="CM" top="top-[35%]" left="left-[25%]" />
          <PlayerSlot position="CM" top="top-[35%]" left="left-[50%]" />
          <PlayerSlot position="CM" top="top-[35%]" left="left-[75%]" />

          {/* Defenders */}
          <PlayerSlot position="LB" top="top-[65%]" left="left-[15%]" />
          <PlayerSlot position="CB" top="top-[65%]" left="left-[38%]" />
          <PlayerSlot position="CB" top="top-[65%]" left="left-[62%]" />
          <PlayerSlot position="RB" top="top-[65%]" left="left-[85%]" />

          {/* Goalkeeper */}
          <PlayerSlot position="GK" top="top-[85%]" left="left-[50%]" />
        </View>

        <View className="p-4">
          <TouchableOpacity className="bg-gaming-neon p-4 rounded-xl items-center">
            <Text className="text-gaming-dark font-bold text-lg">Save & Share Squad</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
