import React, { useState } from "react";
import {
    View,
    Text,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ScheherazadeNew_400Regular } from "@expo-google-fonts/scheherazade-new";
import { Feather } from "@expo/vector-icons";

export default function DzikirItems({ item }) {
    const { width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Poppins_400Regular,
        Poppins_600SemiBold,
        ScheherazadeNew_400Regular,
    });

    if (!fontsLoaded) return null;

    const [counter, setCounter] = useState(0);

    function handleRefresh() {
        setCounter(0);
    }

    function handleIncrement() {
        setCounter(counter + 1);
    }

    return (
        <>
            {item.counter && (
                <View className="absolute z-10 flex flex-row items-center justify-center w-full bottom-8 gap-x-3">
                    <View>
                        <TouchableOpacity
                            onPress={handleRefresh}
                            activeOpacity={0.8}
                            className="z-10 p-3 -mr-6 border-slate-500/50 rounded-full shadow-lg border-[2px] bg-slate-700 shadow-black"
                        >
                            <Feather
                                name="refresh-cw"
                                size={22}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex items-center justify-center w-20 h-20 p-4 -mr-6 bg-gray-100 rounded-full shadow-lg shadow-black">
                        <Text
                            className="text-2xl text-slate-600"
                            style={{ fontFamily: "Poppins_600SemiBold" }}
                        >
                            {counter}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={handleIncrement}
                            activeOpacity={0.8}
                            className="z-10 p-3 rounded-full shadow-lg bg-slate-400 shadow-black border-[2px] border-slate-500/50"
                        >
                            <Feather name="plus" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
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
                                style={{
                                    fontFamily: "ScheherazadeNew_400Regular",
                                }}
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
                    <View className="mt-6 mb-24">
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
        </>
    );
}
