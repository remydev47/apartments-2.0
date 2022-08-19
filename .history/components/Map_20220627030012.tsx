import { styled } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
    return(
      <View style={styles.container}>
        <MapView style={styles.map} />
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