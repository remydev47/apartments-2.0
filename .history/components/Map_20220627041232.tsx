import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Property } from '../types/property';
import { MapMarker } from './MapMarker';

export const Map = ({properties} : {properties: Property }) => {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}>
            {properties.map((i, index) => <MapMarker ltd={i.ltd} lng={i.lng} color={} onPress={} />)}
        </MapView>
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