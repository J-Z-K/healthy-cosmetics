import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import Main from "./App/views/Main";
import globalStyles from "./App/styles/globalStyles";
import NavBar from "./App/components/NavBar";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import Search from "./App/views/Search";

export default function App() {
    const [isLoaded] = useFonts({
        "DancingScript-Regular": require("./App/assets/fonts/DancingScript-Regular.ttf"),
        "DancingScript-Medium": require("./App/assets/fonts/DancingScript-Medium.ttf"),
        "DancingScript-Bold": require("./App/assets/fonts/DancingScript-Bold.ttf"),
    });

    if (!isLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={globalStyles.AndroidSafeArea}>
                <View style={styles.container}>
                    {/* TODO: add navigation here */}
                    {/* <Main /> */}
                    <Search />
                    <NavBar />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
    },
});
