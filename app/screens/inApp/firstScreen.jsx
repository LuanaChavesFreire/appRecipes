import { View, Text, TouchableHighlight } from "react-native";
import styles from '../../../assets/firstScreenStyles/styles'

export default function FirstScreen() {
    return(
        <View style={styles.container}>
            <View style={styles.headerView}>
            <Text style={styles.headerText}>What are we cooking today?</Text>
            </View>

            <View style={styles.btnView}>
            <TouchableHighlight style={styles.btnFS}>
                <Text style={styles.btnText}>My Recipes</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.btnFS}>
                <Text style={styles.btnText}>Create Recipe</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.btnFS}>
                <Text style={styles.btnText}>Search Recipe</Text>
            </TouchableHighlight>
            </View>
            
        </View>
    )
}