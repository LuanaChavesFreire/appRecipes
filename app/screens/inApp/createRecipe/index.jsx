<<<<<<< HEAD
import { Text, TouchableHighlight, View, TextInput, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
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
            const res = await api.post('/recipe', {
                tittle,
                ingredients,
                preparing,
                duration
            })

            Alert.alert("User created successfully!", "", [{ text: "OK", onPress: () => router.push("/screens/inApp/firstScreen") }]);

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

=======
import { Text, TouchableHighlight, View, TextInput } from "react-native";
import Styles from "./styles.jsx";

function CreateRecipeScreen() {
>>>>>>> 8d96afd (feat: UI creating recipe screen)
    return (
        <View style={Styles.container}>
            <View style={Styles.display}>
                <Text style={Styles.displayTitle}>Creating a New Recipe</Text>

<<<<<<< HEAD
                <TextInput placeholder="Recipe Name" style={Styles.inputSmaller} value={tittle} onChangeText={setTittle} />

                <TextInput placeholder="Ingredients" style={Styles.inputBigger} multiline value={ingredients} onChangeText={setIngredients} />

                <TextInput placeholder="Instructions" style={Styles.inputBigger} multiline value={preparing} onChangeText={setPreparing} />

                <TextInput placeholder="preparation Time" style={Styles.inputSmaller} multiline maxLength={10} value={duration} onChangeText={setDuration} />

                <TouchableHighlight style={Styles.btn} onPress={submitRecipe}>
=======
                <TextInput placeholder="Recipe Name" style={Styles.inputSmaller} />

                <TextInput placeholder="Ingredients" style={Styles.inputBigger} multiline numberOfLines={5}/>

                <TextInput placeholder="Instructions" style={Styles.inputBigger} multiline numberOfLines={5}/>
                
                <TextInput placeholder="preparation Time" style={Styles.inputSmaller} multiline maxLength={10}/>

                <TouchableHighlight style={Styles.btn}>
>>>>>>> 8d96afd (feat: UI creating recipe screen)
                    <Text style={Styles.btnText}>Submit Recipe</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default CreateRecipeScreen;