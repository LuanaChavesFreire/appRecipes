import { Text, TextInput, TouchableHighlight, View } from "react-native";
import GenLogStyles from "./styles";

export default function LogDisplay() {
    return(
        <View style={GenLogStyles.container}>
            <View style={GenLogStyles.display}>
                <Text style={GenLogStyles.displayTitle}>Login</Text>

                <TextInput style={GenLogStyles.input} placeholder="email"/>

                <TextInput style={GenLogStyles.input} placeholder="password"/>

                <TouchableHighlight style={GenLogStyles.button}>
                    <Text style={GenLogStyles.bText}>Log in</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text style={{marginTop: 10, color: "#472950"}}>Don't you have a account? Sign Up</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}