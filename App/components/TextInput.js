import React from "react";
import { StyleSheet, TextInput } from "react-native";

function StyleTextInput() {
    const [value, onChangeText] = React.useState("BLABLA");

    return (
        <TextInput
            // style={styles.viewInput}
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    viewInput: {
        height: 40,
        borderWidth: 1,
        borderColor: "#fff",
    },
});
export default TextInput;
