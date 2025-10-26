import { Text, TouchableHighlight, View, TextInput } from "react-native";
import Styles from "./styles.jsx";

function CreateRecipeScreen() {
    return (
        <View style={Styles.container}>
            <View style={Styles.display}>
                <Text style={Styles.displayTitle}>Creating a New Recipe</Text>

                <TextInput placeholder="Recipe Name" style={Styles.inputSmaller} />

                <TextInput placeholder="Ingredients" style={Styles.inputBigger} multiline numberOfLines={5}/>

                <TextInput placeholder="Instructions" style={Styles.inputBigger} multiline numberOfLines={5}/>
                
                <TextInput placeholder="preparation Time" style={Styles.inputSmaller} multiline maxLength={10}/>

                <TouchableHighlight style={Styles.btn}>
                    <Text style={Styles.btnText}>Submit Recipe</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default CreateRecipeScreen;