import { Text, View, ScrollView, TouchableWithoutFeedback } from "react-native"
import Styles from './style'
import api from "../../../../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

function ViewRecipe() {
    async function getRecipes() {
        try{
            const token = await AsyncStorage.getItem("token")
            const res = await api.get('/recipes', {headers: {'Authorization': `Bearer ${token}`}});
            console.log(res.data)
        }
        catch(err){
            console.log(err);
            
        }
    }
    getRecipes();
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>
                    What Are We Cooking Today?
                </Text>
            </View>
            <View style={Styles.listContainer}>
                <Text style={Styles.listTittle}>
                    Ur Recipes
                </Text>
                <View style={Styles.list}>
                    <ScrollView>
                        <TouchableWithoutFeedback>
                            <View style={Styles.btnRecipe}>
                                <Text style={Styles.txtBtnRecipe}>Titulo da receita</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={Styles.btnRecipe}>
                                <Text style={Styles.txtBtnRecipe}>Titulo da receita</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ViewRecipe