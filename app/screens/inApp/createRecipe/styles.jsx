import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#472950"
    },
    
    display: {
        backgroundColor: "#f5daccff",
        width: 350,
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
    },

    displayTitle: {
        fontSize: 24,
        textAlign: "center",
        color: "#472950",
        fontWeight: "bold",
        marginBottom: 20,
    },

    inputSmaller: {
        width: "95%",
        height: 40,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#472950",
        padding: 10,
        backgroundColor: "#f5e3dbff",
    },

    inputBigger: {
        width: "95%",
        height: 200,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#472950",
        padding: 10,
        backgroundColor: "#f5e3dbff",
        textAlignVertical: "top",
    },

    btn: {
        width: "60%",
        height: 40,
        margin: 20,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#472950",
    },

    btnText: {
        color: "#f5daccff",
        fontSize: 18,
    }
})

export default Styles;