import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, Text, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import api from "../../../../services/api";
import Styles from './style';

function ViewRecipe() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const modalizeRef = useRef(null)

    useEffect(() => {
        async function getRecipes() {
            try {
                const token = await AsyncStorage.getItem("token")
                const res = await api.get('/recipes', { headers: { 'Authorization': `Bearer ${token}` } });
                // console.log(res.data)
                setRecipes(res.data)
                
                // console.log(recipes) (tested :D)
            }
            catch (err) {
                console.log(err);

            }
        }
        getRecipes();
    }, [recipes]);

    const onOpen = (recipe) => {
        setSelectedRecipe(recipe);
        modalizeRef.current?.open();
    };

    async function delRecipe(recipeId) {
        try {
            modalizeRef.current?.close();
            const token = await AsyncStorage.getItem("token")
            const res = await api.delete(`/delete/${recipeId}`,
                { headers: { 'Authorization': `Bearer ${token}` } },
            );
        }
        catch (err) {
            console.log(selectedRecipe.id)
            console.log(err)
        }
    }

    return (
        <GestureHandlerRootView>
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
                                    <TouchableWithoutFeedback key={item.id} onPress={() => onOpen(item)}>
                                        <View style={Styles.btnRecipe}>
                                            <Text style={Styles.txtBtnRecipe}>{item.tittle}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <Modalize ref={modalizeRef} modalStyle={Styles.recipeModal}>
                        {selectedRecipe && (
                            <View>
                                <Text style={Styles.listTittle}>
                                    {selectedRecipe.tittle}
                                </Text>
                                <Text style={Styles.recipeTxts}>
                                    🧂 Ingredients: {selectedRecipe.ingredients || "—"}
                                </Text>

                                <Text style={Styles.recipeTxts}>
                                    🔥 Preparing: {selectedRecipe.preparing || "—"}
                                </Text>

                                <Text style={Styles.recipeTxts}>
                                    ⌚ During: {selectedRecipe.duration || "—"}
                                </Text>

                                <TouchableHighlight onPress={() => delRecipe(selectedRecipe.id)}>
                                    <View>
                                        <Text>Delete</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>
                        )}
                    </Modalize>
                </View>
            </View>
            <StatusBar style='auto' />
        </GestureHandlerRootView>
    )
}

export default ViewRecipe