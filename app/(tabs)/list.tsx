import React from "react";
import {View, Text, Button, StyleSheet, FlatList, useColorScheme} from "react-native";
import {useRouter} from "expo-router";
import {useActivity} from "../../components/ActivityContext";
import CustomButton from "@/components/CustomButton";
import {Colors} from "@/constants/Colors";

const ListActivityScreen: React.FC = () => {
    const {activities} = useActivity(); // Obtendo as atividades do contexto
    const router = useRouter();
    const colorScheme = useColorScheme();

    const currentColorSchema = Colors[colorScheme ?? "light"];

    return (
        <View style={[styles.container, {backgroundColor: currentColorSchema.background}]}>
            {activities.length === 0 ? (
                <Text style={[styles.noActivitiesText, {color: currentColorSchema.text}]}>Nenhuma atividade cadastrada</Text>
            ) : (
                <FlatList
                    data={activities}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <Text style={[styles.item, {color: currentColorSchema.ListActivity.text, backgroundColor: currentColorSchema.item.background}]}>{item.name}</Text>
                    )}
                />
            )}
            <CustomButton title="Home" onPress={() => router.back()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    noActivitiesText: {
        textAlign: "center",
        marginVertical: 20,
        fontWeight: "600",
    },
    item: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default ListActivityScreen;
