import { Text, TouchableHighlight, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../../../services/api";
import Styles from "./styles.jsx";

function CreateRecipeScreen() {
    const router = useRouter();
    const [tittle, setTittle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparing, setPreparing] = useState('');
    const [duration, setDuration] = useState('')

    async function submitRecipe() {
        if (!tittle || !ingredients || !preparing || !duration) {
            Alert.alert("Please fill all the fields");
            return;
        }

        try {
            const token = await AsyncStorage.getItem("token");

            const res = await api.post('/createRecipe', {
                tittle,
                ingredients,
                preparing,
                duration
            },
            {
                headers: {Authorization: `Bearer ${token}`,},
            })

            Alert.alert("Recipe created successfully!", "", [{ text: "OK", onPress: () => router.push("/screens/inApp/firstScreen") }]);

            setTittle('');
            setIngredients('');
            setPreparing('');
            setDuration('');
        }
        catch (err) {
            console.log(err);
            Alert.alert("Error", err?.response?.data?.message || "An error occurred while creating the recipe.");
        }
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.display}>
                <Text style={Styles.displayTitle}>Creating a New Recipe</Text>

                <TextInput placeholder="Recipe Name" style={Styles.inputSmaller} value={tittle} onChangeText={setTittle} />

                <TextInput placeholder="Ingredients" style={Styles.inputBigger} multiline value={ingredients} onChangeText={setIngredients} />

                <TextInput placeholder="Instructions" style={Styles.inputBigger} multiline value={preparing} onChangeText={setPreparing} />

                <TextInput placeholder="preparation Time" style={Styles.inputSmaller} multiline maxLength={10} value={duration} onChangeText={setDuration} />

                <TouchableHighlight style={Styles.btn} onPress={submitRecipe}>
                    <Text style={Styles.btnText}>Submit Recipe</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default CreateRecipeScreen;