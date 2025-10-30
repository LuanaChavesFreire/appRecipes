import { Text, TextInput, TouchableHighlight, View, Alert } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../../../services/api";
import GenLogStyles from "./styles";


export default function LogDisplay() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        if (!email || !password) {
            Alert.alert("Please fill in all fields.");
            return;
        }

        try {
            const res = await api.post('/login', {
                email,
                password

            })
            if (res.data) {
                Alert.alert("Login successful!", "", [{ text: "OK", onPress: () => router.push("/screens/inApp/firstScreen") }]);
            }

            await AsyncStorage.setItem('token', res.data.token)
            setEmail("");
            setPassword("");
        }

        catch (err) {
            if (err.response && err.response.status === 404) {
                Alert.alert("User not found. Please check your infos.");
                return;
            }

            console.log(err);
            Alert.alert("Error", err?.response?.data?.message || "An error occurred while logging in. Please check your infos.");
        }
    };

    return (
        <View style={GenLogStyles.container}>
            <View style={GenLogStyles.display}>
                <Text style={GenLogStyles.displayTitle}>Login</Text>

                <TextInput style={GenLogStyles.input} placeholder="email" value={email} onChangeText={setEmail} />

                <TextInput style={GenLogStyles.input} placeholder="password" value={password} onChangeText={setPassword} />

                <TouchableHighlight style={GenLogStyles.button} onPress={login}>
                    <Text style={GenLogStyles.bText}>Log in</Text>
                </TouchableHighlight>

                <Link href={"/screens/logSign/signup"} push>
                    <Text style={{ color: "#472950" }}>Don't have a account? Sign Up</Text>
                </Link>


            </View>
        </View>
    )
}