import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import data from "../data/dzikir-pagi";
import DzikirItems from "../components/DzikirItems";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useKeepAwake } from "expo-keep-awake";

export default function DzikirPagi({ navigation }) {
    useKeepAwake();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) return null;

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Hitung jumlah halaman berdasarkan jumlah item dan asumsi jumlah item per halaman
        const itemsPerPage = 1; // Ganti dengan jumlah item per halaman yang diinginkan
        const totalItems = data.length;
        const totalPagesCount = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(totalPagesCount);
    }, []);

    const handleScroll = (event) => {
        // Hitung halaman berdasarkan posisi scroll
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const pageNum = Math.ceil(contentOffset.x / layoutMeasurement.width);
        setCurrentPage(pageNum + 1);
    };

    return (
        <View className="flex-1 bg-slate-600">
            <StatusBar hidden={true} style="light" />
            <View>
                <LinearGradient
                    colors={["#475569", "transparent"]}
                    className="absolute z-10 flex items-center w-full py-4"
                >
                    <View className="flex flex-row items-center justify-between w-full px-5">
                        <Pressable onPress={() => navigation.navigate("Home")}>
                            <Feather name="home" size={24} color="white" />
                        </Pressable>
                        <View className="flex items-center gap-1">
                            <Feather name="sunrise" size={24} color="white" />
                            <Text
                                className="text-xs text-white"
                                style={{ fontFamily: "Poppins_400Regular" }}
                            >
                                {`${currentPage}/${totalPages}`}
                            </Text>
                        </View>
                        <Pressable onPress={() => alert("Coming Soon!")}>
                            <Feather name="share-2" size={24} color="white" />
                        </Pressable>
                    </View>
                </LinearGradient>
            </View>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <DzikirItems item={item} key={item.key} />
                )}
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />
        </View>
    );
}
