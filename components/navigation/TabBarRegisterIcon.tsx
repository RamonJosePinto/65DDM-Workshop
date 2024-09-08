// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import {type IconProps} from "@expo/vector-icons/build/createIconSet";
import {type ComponentProps} from "react";

export function TabBarRegisterIcon({style, color, ...rest}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
    return <Feather name="edit" size={24} color={color} style={[{marginBottom: -3}, style]} />;
}
