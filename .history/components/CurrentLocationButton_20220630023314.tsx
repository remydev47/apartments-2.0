import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { Text } from "@ui-kitten/components";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Row } from './Row';
import { theme } from '../theme';

export const CurrentLocationButton = ({style}: { style?: ViewStyle}) => {
    return (
        <Row style={[ styles.container, style as ViewStyle ]}>

        </Row>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})