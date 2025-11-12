import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#472950"
    },

    header:{
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

    listContainer: {
        flex: 4,
        width: '100%',
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f5daccff",
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
    },

    listTittle: {
        color: '#472950',
        fontSize: 26,
        fontWeight: "600",
        margin: 20,
    },

    list: {
        width: '80%',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopColor: '#472950',
        maxHeight: '75%'
    },

    btnRecipe: {
        padding: 10,
        borderTopWidth: 1,
        borderBottomColor: '#472950',
    },

    txtBtnRecipe: {
        color: '#472950',
        fontSize: 18,
        fontWeight: "500",

    },

    recipeModal: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#f5daccff'
    },

    recipeTxts: {
        fontSize: 18,
        color: '#472950',
        marginHorizontal: 45,
        marginVertical: 5
    },

    btnDelete: {
        margin: 20,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#472950'
    },

    dltEdtText: {
        color: '#f5daccff',
        fontSize: 18
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }


})

export default Styles;