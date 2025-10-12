import { Text, TextInput, TouchableHighlight, View } from "react-native";
import GenLogStyles from "../../../assets/logSignStyles/styles";


export default function SignDisplay() {
  return (
    <View style={GenLogStyles.container}>
      <View style={GenLogStyles.display}>
        <Text  style={GenLogStyles.displayTitle}>Sign Up</Text>

        <TextInput style={GenLogStyles.input} placeholder="Full Name"/>

        <TextInput style={GenLogStyles.input} placeholder="email"/>

        <TextInput style={GenLogStyles.input} placeholder="Password"/>
      
        <TouchableHighlight style={GenLogStyles.button}>
          <Text style={GenLogStyles.bText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text style={{marginTop: 10, color: "#472950"}}>Already have an account? Log In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}



