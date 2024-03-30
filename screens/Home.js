import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function Home({ navigation }) {
    const [fontLoaded] = useFonts({
        Montserrat_700Bold,
    });
    if (!fontLoaded) return null;
    return (
        <SafeAreaView className="items-center flex-1 bg-gray-100">
            <StatusBar hidden={true} style="light" />
            <View className="justify-center flex-1 w-full px-5 bg-red-950">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPagi")}
                >
                    <Text
                        style={{ fontFamily: "Montserrat_700Bold" }}
                        className="py-2 mx-auto text-5xl text-center text-white"
                    >
                        Dzikir Pagi
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="justify-center flex-1 w-full bg-lime-900">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPetang")}
                >
                    <Text
                        style={{ fontFamily: "Montserrat_700Bold" }}
                        className="py-2 mx-auto text-5xl text-center text-white"
                    >
                        Dzikir Petang
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
