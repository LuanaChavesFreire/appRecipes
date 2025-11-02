import { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback } from "react-native"
import Styles from './style'
import api from "../../../../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

function ViewRecipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            try {
                const token = await AsyncStorage.getItem("token")
                const res = await api.get('/recipes', { headers: { 'Authorization': `Bearer ${token}` } });
                console.log(res.data)
                setRecipes(res.data)
                console.log(recipes)
            }
            catch (err) {
                console.log(err);

            }
        }
        getRecipes();
    }, [])

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
                        {recipes.map((item) => {
                            return (
                                <TouchableWithoutFeedback key={item.tittle}>
                                    <View style={Styles.btnRecipe}>
                                        <Text style={Styles.txtBtnRecipe}>{item.tittle}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ViewRecipe