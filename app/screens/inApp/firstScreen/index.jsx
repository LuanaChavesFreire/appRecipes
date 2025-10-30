import { Text, TouchableHighlight, View } from "react-native";
import { useRouter } from "expo-router";
import styles from './styles';

export default function FirstScreen() {
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.headerView}>
            <Text style={styles.headerText}>What are we cooking today?</Text>
            </View>

            <View style={styles.btnView}>
            <TouchableHighlight style={styles.btnFS}>
                <Text style={styles.btnText}>My Recipes</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.btnFS} onPress={() => router.push("/screens/inApp/createRecipe")}>
                <Text style={styles.btnText}>Create Recipe</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={styles.btnFS}>
                <Text style={styles.btnText}>Search Recipe</Text>
            </TouchableHighlight>
            </View>
            
        </View>
    )
}