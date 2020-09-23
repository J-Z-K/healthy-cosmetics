import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import StyleTextInput from "../components/TextInput";

function Search(props) {
    return (
        <View style={styles.container}>
            <View style={styles.InputBox}>
                <Text style={styles.TextSearch}>SZUKAJ</Text>
                <StyleTextInput />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    InputBox: {
        backgroundColor: colors.secondary,
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
    },
    TextSearch: {
        fontSize: 50,
        color: colors.primary,
        fontFamily: "DancingScript-SemiBold",
        fontWeight: "bold",
        paddingTop: 30,
    },
});
export default Search;
