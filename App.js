import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    const [outputText, setOutputText] = useState(
        "Jak smarujesz czymś swoją mordkę to chcesz żeby było to zdrowe!!!",
    );
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{outputText}</Text>
            <Button
                title="Sprawdź czy zdrowe"
                onPress={() => setOutputText("Jescze nie wiem :(")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
});
