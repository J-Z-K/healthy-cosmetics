import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../styles/colors";

function iconButton({ label, icon }) {
    return (
        <TouchableHighlight
            onPress={() => console.log("Pressed!")}
            underlayColor={"transparent"}
            activeOpacity={0.5}
        >
            <View style={styles.container}>
                <FontAwesome5 name={icon} size={24} color={colors.white} />
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
    },
    container: {
        alignItems: "center",
        // backgroundColor: "red",
    },
});

export default iconButton;
