import { StyleSheet } from "react-native";

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#472950"
    },
    header: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 32,
        textAlign: "center",
        color: "#f5daccff",
        fontWeight: "bold",
    },
    inputContainer: {
        flex: 4,
        width: '100%',
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f5daccff",
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        justifyContent: "center"
    },
    inputBigger: {
        width: "80%",
        height: "80%",
        margin: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#472950",
        padding: 10,
        backgroundColor: "#f5e3dbff",
        textAlignVertical: "top",
    },
    btnView: {
        width: 300,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#472950',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
        color: '#f3e1beff',
        fontSize: 24,
    }
})

export default Styles