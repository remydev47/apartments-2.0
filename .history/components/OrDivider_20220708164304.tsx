import { Text, Divider } from '@ui-kitten/components'
import { ViewStyle, StyleSheet, View } from 'react-native';

export const OrDivider = ({style}:{style?: ViewStyle}) => {
    return(
        <View style={[styles.container, style]}>
            <Divider style={styles.divider}/>
            <Text appearance={"hint"} style={styles.Ortext}>
                or
            </Text>
            <Divider style={styles.divider}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
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
        borderColor: "#d3d3d3"
    }
})