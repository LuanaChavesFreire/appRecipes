import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TouchableHighlight, TouchableWithoutFeedback, View, TextInput, Alert } from "react-native";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import api from "../../../../services/api";
import Styles from './style';

function ViewRecipe() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [edit, setEdit] = useState(false);
    const modalizeRef = useRef(null)

    const getRecipes = async () => {
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

    useEffect(() => {
        getRecipes();
    }, [recipes]);

    const delRecipe = async () => {
        try {
            // console.log(modalizeRef)
            modalizeRef.current?.close();
            const token = await AsyncStorage.getItem("token")
            const res = await api.delete(`/delete/${selectedRecipe.id}`,
                { headers: { 'Authorization': `Bearer ${token}` } },
            );
        }
        catch (err) {
            console.log(selectedRecipe.id)
            console.log(err)
        }
    };
    
    const editRecipe = async () => {
        try {
            setEdit(false);
            const token = await AsyncStorage.getItem("token")
            const res = await api.put(`/edit/${selectedRecipe.id}`, {
                tittle: selectedRecipe.tittle,
                ingredients: selectedRecipe.ingredients,
                preparing: selectedRecipe.preparing,
                duration: selectedRecipe.duration
            },
            { headers: { 'Authorization': `Bearer ${token}` } });
            
            getRecipes();


        }
        catch (err) {
            console.log(err)
        }
    }

    const onOpen = (recipe) => {
        setSelectedRecipe(recipe);
        modalizeRef.current?.open();
    };

    const openEdit = () => { setEdit(true) };
    const cancelEdit = () => { setEdit(false) };

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
                        {selectedRecipe ? (edit ? (
                            <View>
                                <TextInput style={Styles.listTittle}
                                value={selectedRecipe?.tittle ?? ""}
                                onChangeText={(v) => setSelectedRecipe((prev) => ({...prev, tittle: v}))}
                                multiline/>

                                <TextInput style={Styles.recipeTxts}
                                value={selectedRecipe?.ingredients ?? ""}
                                onChangeText={(v) => setSelectedRecipe((prev) => ({...prev, ingredients: v}))} 
                                multiline/>

                                <TextInput style={Styles.recipeTxts} 
                                value={selectedRecipe?.preparing ?? ""}
                                onChangeText={(v) => setSelectedRecipe((prev) => ({...prev, preparing: v}))}
                                multiline/>

                                <TextInput style={Styles.recipeTxts} 
                                value={selectedRecipe?.duration ?? ""}
                                onChangeText={(v) => setSelectedRecipe(prev => ({ ...prev, duration: v }))}/>

                                <View style={Styles.btnContainer}>
                                    <TouchableHighlight onPress={cancelEdit}>
                                        <View style={Styles.btnDelete}>
                                            <Text style={Styles.dltEdtText} >Cancel</Text>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight onPress={editRecipe}>
                                        <View style={Styles.btnDelete}>
                                            <Text style={Styles.dltEdtText} >Save</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>

                            </View>
                        ) : (
                            <View>
                                <Text style={Styles.listTittle}> {selectedRecipe.tittle} </Text>

                                <Text style={Styles.recipeTxts}> 🧂 Ingredients: {selectedRecipe.ingredients} </Text>

                                <Text style={Styles.recipeTxts}> 🔥 Preparing: {selectedRecipe.preparing} </Text>

                                <Text style={Styles.recipeTxts}> ⌚ During: {selectedRecipe.duration} </Text>

                                <View style={Styles.btnContainer}>
                                    <TouchableHighlight onPress={() => delRecipe(selectedRecipe.id)}>
                                        <View style={Styles.btnDelete}>
                                            <Text style={Styles.dltEdtText} >Delete</Text>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight onPress={openEdit}>
                                        <View style={Styles.btnDelete}>
                                            <Text style={Styles.dltEdtText} >Edit</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>

                            </View>

                        )) : null
                        }

                    </Modalize>
                </View>
            </View>
            <StatusBar style='auto' />
        </GestureHandlerRootView>
    )
}

export default ViewRecipe