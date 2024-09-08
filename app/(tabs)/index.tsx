import React from "react";
import {View, Button, Image, StyleSheet, useColorScheme} from "react-native";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors"; // Supondo que as cores estejam no arquivo Colors
import CustomButton from "@/components/CustomButton";

const HomeScreen: React.FC = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();

    // Determine o tema atual (light ou dark)
    const currentColors = Colors[colorScheme ?? "light"]; // Usa o tema 'light' por padrão

    return (
        <View style={[styles.container, {backgroundColor: currentColors.background}]}>
            <Image source={require("@/assets/images/react-logo.png")} style={styles.logo} />
            <View style={styles.buttonsContainer}>
                <CustomButton title="Cadastrar Atividade" onPress={() => router.push("/register")} />
                <CustomButton title="Listar Atividades" onPress={() => router.push("/list")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    buttonsContainer: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        width: "100%",
    },
});

export default HomeScreen;
