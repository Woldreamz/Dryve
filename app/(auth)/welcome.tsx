import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="bg-[#E2E8F0] w-[32px] h-[4px] rounded-full mx-1"></View>
        }
        activeDot={
          <View className="bg-[#0286FF] w-[32px] h-[4px] rounded-full mx-1"></View>
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        [
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex items-center justify-center mt-10">
              <Text className="text-black text-3xl font-JakartaBold">
                Welcome to
              </Text>
              <Text className="text-black text-3xl font-JakartaBold mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
        ]
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
