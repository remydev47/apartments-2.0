import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { Text } from "@ui-kitten/components";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'

import { Row } from './Row';
import { theme } from '../theme';

export const CurrentLocationButton = ({style}: { style?: ViewStyle}) => {

    const navigation = useNavigation();

    const getLocation = async () => {
        let {status} = await Location.requestForeGroundPermisionsAsync();
        if (status !== "granted") {
            alert("Permission to access Location was denied")
            return
        }
        let location = await Location.getCurrentPositionAsync({});
        handleNavigate(location)
    }

    return (
        <Row style={[styles.container, style as ViewStyle]}>
           <FontAwesome 
             name="location-arrow"
            size={38}
            style={styles.Icon}
            color={theme["color-primary-500"]} 
           />
           <TouchableOpacity onPress={async () => await getLocation()}>
            <Text style={styles.text} status='info'>
                Use My Current Location
            </Text>
           </TouchableOpacity>
        </Row>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    Icon: {
        marginLeft: 5,
    },
    text: {
        marginLeft: 10,
        fontWeight: "600"
    } 
})