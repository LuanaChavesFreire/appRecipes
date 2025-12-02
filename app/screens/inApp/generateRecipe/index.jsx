import { Text, TextInput, TouchableHighlight, View, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../../../services/api";
import Styles from "./styles";

export default function GenerateRecipe() {
    const router = useRouter();
    const [ingredients, setIngredients] = useState('');

    async function generateRecipe() {
        if (!ingredients) {
            Alert.alert('Please enter ingredinets')
        }
        try {
            const token = await AsyncStorage.getItem('token')
            const res = await api.post('/generateRecipe', {ingredients},{
                headers: {Authorization: `Bearer ${token}`}
            })

            Alert.alert("Recipe was successfully! generated", "", [{ text: "OK", onPress: () => router.push("/screens/inApp/firstScreen") }]);

            setIngredients('')
        }
        catch(err) {
            console.error(err);
            
        }
    }

    return (
        <View style={Styles.container} >
            <View style={Styles.header}>
                <Text style={Styles.headerText} >
                    Chose ur ingredients
                </Text>
            </View>
            <View style={Styles.inputContainer}>
                <TextInput style={Styles.inputBigger} value={ingredients} onChangeText={setIngredients} placeholder="Ingredients" />
                
                <TouchableHighlight onPress={generateRecipe} >
                    <View style={Styles.btnView}>
                        <Text style={Styles.btnText} >Submit</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}