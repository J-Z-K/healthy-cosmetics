import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

function StyledButton({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 200,
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        textTransform: "uppercase",
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1,
    },
});
export default StyledButton;
