import { Text, TextInput, TouchableHighlight, View } from "react-native";
import GenStyles from "../../../assets/logSignStyles/generalStyles";


export default function SignDisplay() {
  return (
    <View style={GenStyles.container}>
      <View style={GenStyles.display}>
        <Text  style={GenStyles.displayTitle}>Sign Up</Text>

        <TextInput style={GenStyles.input} placeholder="Full Name"/>

        <TextInput style={GenStyles.input} placeholder="email"/>

        <TextInput style={GenStyles.input} placeholder="Password"/>
      
        <TouchableHighlight style={GenStyles.button}>
          <Text style={GenStyles.bText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text style={{marginTop: 10, color: "#472950"}}>Already have an account? Log In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}



