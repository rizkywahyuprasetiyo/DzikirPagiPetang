import React from "react";
import { View, Text, FlatList } from "react-native";
import data from "../data/dzikir-pagi";
import DzikirItems from "../components/DzikirItems";
import { StatusBar } from "expo-status-bar";

export default function DzikirPagi() {
    return (
        <View className="flex-1 bg-red-950">
            <StatusBar hidden={true} style="light" />
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <DzikirItems item={item} />}
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
