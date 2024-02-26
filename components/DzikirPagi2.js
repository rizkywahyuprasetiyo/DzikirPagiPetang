import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import DzikirPagi2Image from "../assets/illustrations/dzikir-pagi-2.svg";

export default function DzikirPagi2() {
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
                    Ayat Kursi
                </Text>
            </View>
            <View className="mx-auto mt-8">
                <DzikirPagi2Image width={300} />
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
                    "Allah tidak ada Ilah (yang berhak disembah) melainkan Dia
                    Yang Hidup Kekal lagi terus menerus mengurus (makhluk-Nya);
                    Tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang ada
                    di langit dan di bumi. Tidak ada yang dapat memberikan
                    syafa'at di sisi Allah tanpa izin-Nya. Allah mengetahui
                    apa-apa yang (berada) dihadapan mereka, dan dibelakang
                    mereka dan mereka tidak mengetahui apa-apa dari ilmu Allah
                    melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi
                    langit dan bumi. Dan Allah tidak merasa berat memelihara
                    keduanya, Allah Mahatinggi lagi Mahabesar." (Al-Baqarah:
                    255) (Dibaca pagi dan sore 1x).
                </Text>
            </View>
        </View>
    );
}
