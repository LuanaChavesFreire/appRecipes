import { Text, View, ScrollView, TouchableWithoutFeedback } from "react-native"
import Styles from './style'

function ViewRecipe() {
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