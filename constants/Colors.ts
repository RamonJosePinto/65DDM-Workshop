/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
    light: {
        text: "#11181C",
        background: "rgba(0,0,0,0.00)",
        tint: tintColorLight,
        icon: "#687076",
        tabIconDefault: "#687076",
        tabIconSelected: tintColorLight,
        button: {
            background: "#fff",
            border: "#d8d8d8",
            text: "rgb(39,39,39)",
        },
        item: {
            background: "#FFF",
        },
    },
    dark: {
        text: "#ECEDEE",
        background: "#151718",
        tint: tintColorDark,
        icon: "#9BA1A6",
        tabIconDefault: "#9BA1A6",
        tabIconSelected: tintColorDark,
        button: {
            background: "rgb(18,18,18)",
            border: "rgb(39,39,39)",
            text: "blue",
        },
        item: {
            background: "#11181C",
            text: "#fff",
        },
    },
};
