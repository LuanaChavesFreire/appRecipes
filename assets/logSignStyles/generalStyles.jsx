import { StyleSheet } from "react-native";

const GenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#472950"
    },

    displayTitle: {
        fontSize: 22,
        textAlign: "center",
        color: "#472950",
    },

    display: {
        width: 300,
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: "#f5daccff",
    },

    input: {
        width: "95%",
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#472950",
        color: "#472950",
        paddingLeft: 10,
    },

    button: {
        width: "60%",
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#472950",
    },
    bText: {
        color: "#f5daccff",
        fontSize: 18,
    }
})

export default GenStyles;