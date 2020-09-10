import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import IconButton from "./IconButton";

function NavBar(props) {
    return (
        <View style={styles.container}>
            <IconButton label="Home" icon="home" />
            <IconButton label="Search" icon="search" />
            <IconButton label="More" icon="bars" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        // bottom: 0,
        backgroundColor: colors.primary,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        paddingTop: 12,
    },
});

export default NavBar;
