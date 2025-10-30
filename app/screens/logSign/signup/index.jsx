import { Alert, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Link } from 'expo-router';
import { useState } from "react";
import { useRouter } from "expo-router";
import api from "../../../../services/api";
import GenLogStyles from "./styles";


export default function SignDisplay() {
  const router = useRouter();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    if(!fullname || !email || !password) {
      Alert.alert("Please fill in all fields.");
      return;
    }

    try{
      const res = await api.post('/signup', {
        fullname,
        email,
        password
      });
      
      Alert.alert("User created successfully!", "", [{ text: "OK", onPress: () => router.push("/screens/inApp/firstScreen") }]);

      setFullName("");
      setEmail("");
      setPassword("");
    }
    
    catch (err) {
      console.log(err);
      Alert.alert("Error", err?.response?.data?.message || "An error occurred while creating the user.");
    }
  };

  return (
    <View style={GenLogStyles.container}>
      <View style={GenLogStyles.display}>
        <Text style={GenLogStyles.displayTitle}>Sign Up</Text>

        <TextInput style={GenLogStyles.input} placeholder="Full Name" value={fullname} onChangeText={setFullName}/>

        <TextInput style={GenLogStyles.input} placeholder="email" value={email} onChangeText={setEmail}/>

        <TextInput style={GenLogStyles.input} placeholder="Password" value={password} onChangeText={setPassword}/>

        <TouchableHighlight style={GenLogStyles.button} onPress={signup}>
          <Text style={GenLogStyles.bText}>Sign in</Text>
        </TouchableHighlight>

        <Link href={"/screens/logSign/login"} push>
          <Text style={{ color: "#472950" }}>Already have an account? Log In</Text>
        </Link>
      </View>
    </View>
  );
}



