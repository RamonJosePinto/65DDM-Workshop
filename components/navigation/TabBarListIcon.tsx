// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {type IconProps} from "@expo/vector-icons/build/createIconSet";
import {type ComponentProps} from "react";

export function TabBarListIcon({style, color, ...rest}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
    return <FontAwesome size={24} name="list" color={color} style={[{marginBottom: -3}, style]} />;
}
