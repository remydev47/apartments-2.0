import { TouchableOpacity, ViewStyle, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import { theme } from "../theme";

export const RecentSearchButton = ({name, onPress, style}: {name: String; onPress:() => void ; style?: ViewStyle}) => {
    return(
        <TouchableOpacity style={styles.container}></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})