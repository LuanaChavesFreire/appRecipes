import  { Text, TextInput, TouchableHighlight, View } from "react-native";
import GenStyles from "../../../assets/logSignStyles/generalStyles";

export default function LogDisplay() {
    return(
        <View style={GenStyles.container}>
            <View style={GenStyles.display}>
                <Text style={GenStyles.displayTitle}>Login</Text>

                <TextInput style={GenStyles.input} placeholder="email"/>

                <TextInput style={GenStyles.input} placeholder="password"/>

                <TouchableHighlight style={GenStyles.button}>
                    <Text style={GenStyles.bText}>Log in</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text style={{marginTop: 10, color: "#472950"}}>Don't you have a account? Sign Up</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}