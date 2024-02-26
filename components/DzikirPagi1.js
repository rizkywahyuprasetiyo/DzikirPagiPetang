import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import DzikirPagi1Image from "../assets/illustrations/dzikir-pagi-1.svg";

export default function DzikirPagi1() {
    const [fontLoaded] = useFonts({
        "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    });
    if (!fontLoaded) return null;
    return (
        <View className="my-16">
            <View className="mx-auto">
                <Text
                    style={{ fontFamily: "Montserrat-Black" }}
                    className="text-white text-5xl"
                >
                    Ta'awudz
                </Text>
            </View>
            <View className="mx-auto mt-8">
                <DzikirPagi1Image width={300} />
            </View>
            <View className="mx-auto mt-12">
                <Text
                    style={{ fontFamily: "Poppins-SemiBold" }}
                    className="text-white text-xl text-center"
                >
                    ~ Artinya ~
                </Text>
                <Text
                    style={{ fontFamily: "Poppins-Regular" }}
                    className="text-white text-lg text-center mt-3"
                >
                    "Aku berlindung kepada Allah dari godaan syaitan yang
                    terkutuk."
                </Text>
            </View>
        </View>
    );
}
