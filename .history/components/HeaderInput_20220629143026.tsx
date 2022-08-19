import { TouchableOpacity,Platform, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Row } from './Row';
import { Text } from '@ui-kitten/components';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

export const HeaderInput = () => {
    return(
        <TouchableOpacity
         onPress={() => console.log("navigate to search screen")}
         style={styles.container}
        >
         <Row style={{ alignItems: "center"}}>
             <MaterialCommunityIcons name="magnify" color={theme["color-priimary-500"]} size={28}/>
             <Text style={styles.text}>FIND A LOCATION</Text>
         </Row>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 50 :30,
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderRadius: 30,
        padding: 10
    },
    text: {
        marginLeft: 10 
    }
})