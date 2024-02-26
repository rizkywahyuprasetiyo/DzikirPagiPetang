import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function Home({ navigation }) {
    const [fontLoaded] = useFonts({
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    });
    if (!fontLoaded) return null;
    return (
        <SafeAreaView className="mt-5 flex-1 items-center bg-gray-100">
            <View className="flex-1 w-full bg-red-900 justify-center">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPagi")}
                >
                    <Text
                        style={{ fontFamily: "Montserrat-Bold" }}
                        className="text-white text-5xl mx-auto"
                    >
                        Dzikir Pagi
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-1 w-full bg-lime-900 justify-center">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPetang")}
                >
                    <Text
                        style={{ fontFamily: "Montserrat-Bold" }}
                        className="text-white text-5xl mx-auto"
                    >
                        Dzikir Petang
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
