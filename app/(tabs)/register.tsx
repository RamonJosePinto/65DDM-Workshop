import React, {useState, useEffect} from "react";
import {View, TextInput, Text, StyleSheet, useColorScheme} from "react-native";

import {Colors} from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import {useFocusEffect} from "@react-navigation/native";
import {useActivity} from "@/hooks/ActivityContext";

const RegisterActivityScreen: React.FC = () => {
    const [activity, setActivity] = useState<string>("");
    const [feedbackMessage, setFeedbackMessage] = useState<string>("");
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const {addActivity} = useActivity();
    const colorScheme = useColorScheme();

    const currentColorSchema = Colors[colorScheme ?? "light"];

    const resetFeedbackMessage = () => {
        setFeedbackMessage("");
    };

    useFocusEffect(
        React.useCallback(() => {
            resetFeedbackMessage();
        }, [])
    );

    useEffect(() => {
        if (feedbackMessage !== "") {
            const timer = setTimeout(() => {
                resetFeedbackMessage();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [feedbackMessage]);

    const handleRegister = () => {
        if (activity.trim() === "") {
            setIsSuccess(false);
            setFeedbackMessage("Informe a atividade a ser cadastrada");
        } else {
            addActivity(activity);
            setActivity("");
            setIsSuccess(true);
            setFeedbackMessage("Atividade cadastrada com sucesso");
        }
    };

    return (
        <View style={[styles.container, {backgroundColor: currentColorSchema.background}]}>
            {feedbackMessage !== "" && (
                <Text
                    style={[
                        styles.feedbackMessage,
                        {
                            backgroundColor: isSuccess ? (colorScheme === "dark" ? "#3a7e5e" : "#4CAF50") : colorScheme === "dark" ? "#842029" : "#ff505e",
                            color: "#fff",
                            fontWeight: "600",
                        },
                    ]}
                >
                    {feedbackMessage}
                </Text>
            )}

            <TextInput
                style={[styles.input, {color: currentColorSchema.text}]}
                placeholder="Digite o nome da atividade"
                placeholderTextColor={currentColorSchema.icon}
                value={activity}
                onChangeText={setActivity}
            />
            <CustomButton title="Cadastrar" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#fff",
        borderColor: "#d8d8d8",
    },
    feedbackMessage: {
        marginBottom: 20,
        fontSize: 16,
        textAlign: "center",
        padding: 10,
        borderRadius: 8,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
});

export default RegisterActivityScreen;
