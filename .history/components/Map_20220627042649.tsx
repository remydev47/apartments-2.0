import { View, StyleSheet, Platform } from 'react-native';
import MapView from 'react-native-maps';
import { Property } from '../types/property';
import { MapMarker } from './MapMarker';
import { useState, useRef } from 'react';
import { theme } from '../theme';

export const Map = ({properties} : {properties: Property[] }) => {
     const [activeIndex, setActiveIndex ] = useState(-1);
     const mapRef = useRef<MapView | null>(null)

     const handleMarkerPress = () => {
        if(Platform.OS === "ios") {
            setTimeout(() => {
                
            }, 100);
        }
     }

    return(
      <View style={styles.container}>
        <MapView style={styles.map}>
            {properties.map((i, index) => 
             <MapMarker lat={i.lat} lng={i.lng}
              color={
                activeIndex === index 
                ? theme["color-info-400"]
                : theme["color-primary-500"]
                } 
              onPress={} 
             />
             )}
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