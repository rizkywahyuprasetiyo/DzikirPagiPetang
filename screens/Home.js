import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
    const [fontLoaded] = useFonts({
        Montserrat_700Bold,
        Poppins_400Regular,
    });
    if (!fontLoaded) return null;
    return (
        <SafeAreaView className="items-center flex-1 bg-gray-100">
            <StatusBar hidden={true} style="light" />
            <View className="justify-center flex-1 w-full px-6 bg-slate-600">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPagi")}
                    activeOpacity={0.5}
                >
                    <Text
                        style={{ fontFamily: "Montserrat_700Bold" }}
                        className="py-2 mx-auto text-5xl text-center text-white"
                    >
                        Dzikir Pagi
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="justify-center flex-1 w-full bg-slate-800">
                <TouchableOpacity
                    onPress={() => navigation.navigate("DzikirPetang")}
                    activeOpacity={0.5}
                >
                    <Text
                        style={{ fontFamily: "Montserrat_700Bold" }}
                        className="py-2 mx-auto text-5xl text-center text-white"
                    >
                        Dzikir Petang
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="w-full py-5 bg-slate-900">
                <Text
                    className="text-center text-white"
                    style={{ fontFamily: "Poppins_400Regular" }}
                >
                    Code with <Feather name="heart" size={14} color="white" />{" "}
                    from Desa Kapur.
                </Text>
            </View>
        </SafeAreaView>
    );
}
