import {Colors} from "@/constants/Colors";
import {Pressable, StyleSheet, Text, useColorScheme} from "react-native";

export default function CustomButton({title, onPress}: {title: string; onPress: () => void}) {
    const colorScheme = useColorScheme();

    const currentColorSchema = Colors[colorScheme ?? "light"];

    return (
        <Pressable style={[{backgroundColor: currentColorSchema.button.background, borderColor: currentColorSchema.button.border}, styles.button]} onPress={onPress}>
            <Text style={[{color: currentColorSchema.button.text}, styles.text]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        width: "100%",
    },
    text: {
        fontWeight: "600",
    },
});
