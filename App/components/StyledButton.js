import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
function StyledButton({ label, onPress, icon }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {icon ? (
                <FontAwesome5
                    style={styles.iconButton}
                    name={icon}
                    size={32}
                    color="white"
                />
            ) : null}
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
        flexDirection: "row",
    },
    buttonText: {
        textTransform: "uppercase",
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1,
    },
    iconButton: {
        paddingRight: 10,
    },
});
export default StyledButton;
