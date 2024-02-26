import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DzikirPagi from "./screens/DzikirPagi";
import DzikirPetang from "./screens/DzikirPetang";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DzikirPagi"
                    component={DzikirPagi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DzikirPetang"
                    component={DzikirPetang}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
