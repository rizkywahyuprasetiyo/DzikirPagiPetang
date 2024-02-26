import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import DzikirPagi1 from "../components/DzikirPagi1";
import DzikirPagi2 from "../components/DzikirPagi2";

export default function DzikirPagi() {
    return (
        <SafeAreaView className="mt-5 flex-1 items-center bg-red-900">
            <ScrollView className="px-4 py-8 w-full">
                <DzikirPagi1 />
                <DzikirPagi2 />
            </ScrollView>
        </SafeAreaView>
    );
}
