import { Text, Divider } from '@ui-kitten/components'
import { ViewStyle, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Row } from './Row';

export const OrDivider = ({style}:{style?: ViewStyle}) => {
    return(
        <Row style={[styles.container, style as ViewStyle]}>
            <Divider style={styles.divider}/>
            <Text appearance={"hint"} style={styles.Ortext}>
                or
            </Text>
            <Divider style={styles.divider}/>
        </Row>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center"
    },
    Ortext: {
        paddingHorizontal: 10,
        marginTop: -5
    },
    divider:{
        borderWidth:1,
        width: "45%",
        borderColor: theme['color-gray']
    },
})