import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import MainLogo from "../components/MainLogo";
// import NavBar from "../components/NavBar";
import Image from "react-native-scalable-image";
import colors from "../styles/colors";
import StyledButton from "../components/StyledButton";

export default function Main() {
    return (
        <View style={styles.container}>
            <MainLogo />
            <View style={styles.containerGroup}>
                <Image
                    source={require("../assets/podjebka.png")}
                    width={Dimensions.get("window").width}
                />
                <View style={styles.scanBox}>
                    <StyledButton
                        label="product scan"
                        onPress={() => {
                            console.log("Skanowanie...");
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    containerGroup: {
        marginTop: 40,
        flex: 1,
    },
    scanBox: {
        backgroundColor: colors.secondary,
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
    },
});
