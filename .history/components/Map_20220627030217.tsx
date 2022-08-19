import { styled } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Property } from '../types/property';

export const Map = ({properties} : {property: Property }) => {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}></MapView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden"
    },
    map:{
        height: "100%",
        width: "100%"
    }
})