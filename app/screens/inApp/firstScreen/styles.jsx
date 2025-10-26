import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3e1beff',
    },

    headerView:{
        flex: 3,
        justifyContent:"flex-end",
    },
    
    btnView: {
        flex: 4,
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingTop: 80,
        gap: 40,
        // backgroundColor: '#ffffffff',
    },

    headerText: {
        color: '#472950',
        fontSize: 36,
        fontWeight: "700",
        textAlign: 'center',
    },

    btnFS: {
        width: 300,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#472950',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        color: '#f3e1beff',
        fontSize: 24,
    }

})

export default styles;