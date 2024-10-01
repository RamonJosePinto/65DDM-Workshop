import {Tabs} from "expo-router";
import React from "react";

import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";
import {TabBarListIcon} from "@/components/navigation/TabBarListIcon";
import {TabBarRegisterIcon} from "@/components/navigation/TabBarRegisterIcon";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const iconColor = colorScheme === "light" ? Colors.light.tint : Colors.dark.tint;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color, focused}) => <TabBarIcon name={"home"} color={focused ? iconColor : "#687076"} />,
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    title: "Listar",
                    tabBarIcon: ({color, focused}) => <TabBarListIcon name={"list"} color={focused ? iconColor : "#687076"} />,
                }}
            />
            <Tabs.Screen
                name="register"
                options={{
                    title: "Cadastrar",
                    tabBarIcon: ({color, focused}) => <TabBarRegisterIcon name={focused ? "home" : "home-outline"} color={focused ? iconColor : "#687076"} />,
                }}
            />
        </Tabs>
    );
}
