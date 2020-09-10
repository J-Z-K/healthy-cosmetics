import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../styles/colors";

function MainLogo(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.logoText, styles.left]}>Healthy</Text>
            <Text style={[styles.logoText, styles.right]}>Cosmetics</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        alignSelf: "center",
        width: "65%",
    },
    logoText: {
        fontSize: 66,
        color: colors.primary,
        fontFamily: "DancingScript-Bold",
        lineHeight: 70,
    },
    left: {
        textAlign: "left",
    },
    right: {
        textAlign: "right",
    },
});

export default MainLogo;
