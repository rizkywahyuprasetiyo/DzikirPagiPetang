import React from "react";
import { View, Text, useWindowDimensions, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { ScheherazadeNew_400Regular } from "@expo-google-fonts/scheherazade-new";

export default function DzikirItems({ item }) {
    const { width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Poppins_400Regular,
        ScheherazadeNew_400Regular,
    });

    if (!fontsLoaded) return null;

    return (
        <ScrollView>
            <View
                className="items-center flex-1 px-[22px] py-8"
                style={{ width }}
            >
                <View className="mt-16 mb-6">
                    <Text
                        className="text-4xl text-center text-white"
                        style={{ fontFamily: "Montserrat_800ExtraBold" }}
                    >
                        {item.judul}
                    </Text>
                    <Text
                        className="mt-2 text-center text-white"
                        style={{ fontFamily: "Poppins_400Regular" }}
                    >
                        {item.petunjuk}
                    </Text>
                </View>
                <View>
                    {item.awal_surah && (
                        <Text
                            className="text-3xl leading-[65px] text-center text-white"
                            style={{ fontFamily: "ScheherazadeNew_400Regular" }}
                        >
                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                        </Text>
                    )}
                    <Text
                        className="text-3xl leading-[65px] text-center text-white"
                        style={{ fontFamily: "ScheherazadeNew_400Regular" }}
                    >
                        {item.arabic}
                    </Text>
                </View>
                <View className="mt-6">
                    <Text
                        className="mb-3 text-lg text-center text-white"
                        style={{ fontFamily: "Poppins_400Regular" }}
                    >
                        ❁ Artinya ❁
                    </Text>
                    <Text
                        className="leading-relaxed text-center text-white text-md"
                        style={{ fontFamily: "Poppins_400Regular" }}
                    >
                        "{item.arti}"
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
