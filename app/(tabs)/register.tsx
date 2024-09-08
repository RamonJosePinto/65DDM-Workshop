import React, {useState, useEffect} from "react";
import {View, TextInput, Text, StyleSheet, useColorScheme} from "react-native";
import {useRouter} from "expo-router";
import {useActivity} from "../../components/ActivityContext";
import {Colors} from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import {useFocusEffect} from "@react-navigation/native";

const RegisterActivityScreen: React.FC = () => {
    const [activity, setActivity] = useState<string>("");
    const [feedbackMessage, setFeedbackMessage] = useState<string>(""); // Estado para gerenciar a mensagem de feedback
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // Estado para diferenciar erro de sucesso
    const {addActivity} = useActivity(); // Usando o contexto
    const router = useRouter();
    const colorScheme = useColorScheme();

    const currentColorSchema = Colors[colorScheme ?? "light"];

    // Função para resetar a mensagem de feedback
    const resetFeedbackMessage = () => {
        setFeedbackMessage("");
    };

    // Limpa a mensagem de feedback ao focar na tela
    useFocusEffect(
        React.useCallback(() => {
            resetFeedbackMessage();
        }, [])
    );

    // Define um temporizador para limpar a mensagem de feedback após 3 segundos
    useEffect(() => {
        if (feedbackMessage !== "") {
            const timer = setTimeout(() => {
                resetFeedbackMessage();
            }, 3000); // Mensagem desaparece após 3 segundos

            return () => clearTimeout(timer); // Limpeza do temporizador ao desmontar o componente ou quando feedbackMessage muda
        }
    }, [feedbackMessage]);

    const handleRegister = () => {
        if (activity.trim() === "") {
            setIsSuccess(false); // Define como erro
            setFeedbackMessage("Informe a atividade a ser cadastrada"); // Mensagem de erro
        } else {
            addActivity(activity); // Adicionando atividade ao contexto
            setActivity("");
            setIsSuccess(true); // Define como sucesso
            setFeedbackMessage("Atividade cadastrada com sucesso"); // Mensagem de sucesso
        }
    };

    return (
        <View style={[styles.container, {backgroundColor: currentColorSchema.background}]}>
            {feedbackMessage !== "" && (
                <Text
                    style={[
                        styles.feedbackMessage,
                        {
                            backgroundColor: isSuccess
                                ? colorScheme === "dark"
                                    ? "#3a7e5e"
                                    : "#4CAF50" // Verde
                                : colorScheme === "dark"
                                ? "#842029"
                                : "#ff505e", // Vermelho
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
