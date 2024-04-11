import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    // logic
    const handleRefresh = () => {
        setCounter(0);
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    return (
        <View className="absolute z-10 flex flex-row items-center justify-center w-full bottom-8 gap-x-3">
            <View>
                <TouchableOpacity
                    onPress={handleRefresh}
                    activeOpacity={0.8}
                    className="z-10 p-3 -mr-6 border-slate-500/50 rounded-full shadow-lg border-[2px] bg-slate-700 shadow-black"
                >
                    <Feather name="refresh-cw" size={22} color="white" />
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
    );
}
