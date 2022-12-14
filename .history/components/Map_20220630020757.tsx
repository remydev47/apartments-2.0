import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Region } from 'react-native-maps';
import { Property } from '../types/property';
import { MapMarker } from './MapMarker';
import { useState, useRef } from 'react';
import { theme } from '../theme';
import { Card } from './Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Map = ({
    properties,
    mapRef, 
    initialRegion, 
} : {
    properties: Property[], 
    mapRef: React.MutableRefObject<MapView | null>,
    initialRegion?: Region | undefined
}) => {
     const [activeIndex, setActiveIndex ] = useState(-1);
     const navigation = useNavigation();

     const onFocusProperty = () => {
        setActiveIndex(-1);
        navigation.setOptions({ tabBarStyle : { display: "flex" } })
     }
     
     const handleMapPress = () => {
        if(Platform.OS === "android") onFocusProperty();
        }

     const handleMarkerPress = (index: number) => {
        if(Platform.OS === "ios") {
            setTimeout(() => {
                mapRef.current?.animateCamera({
                    center:{
                        latitude: properties[index].lat,
                        longitude: properties[index].lng,
                     },
                    });
            }, 100);
        }
        setActiveIndex(index);
        navigation.setOptions({ tabBarStyle : { display: "none" } })
     };

    return(
      <View style={styles.container}>
        <MapView 
           style={styles.map} 
           userInterfaceStyle={"light"} 
           ref={mapRef}
           onPress={handleMapPress}
           initialRegion= {initialRegion ? initialRegion : undefined}
        >
            {properties.map((i, index) => 
             <MapMarker lat={i.lat} lng={i.lng}
              color={
                activeIndex === index 
                ? theme["color-info-400"]
                : theme["color-primary-500"]
                } 
              onPress={() => handleMarkerPress(index)} 
             />
             )}
        </MapView>
        {activeIndex > -1 && (
         <>
         {Platform.OS === "ios" && 
          <TouchableOpacity style={styles.exit} onPress={onFocusProperty}> 
            <MaterialCommunityIcons name="close" color={theme["color-primary-500"]} size={24}/>
          </TouchableOpacity>
          }
           <Card property={properties[activeIndex]} style={styles.card} />
         </>
        )}
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
    },
    card: {
        position: "absolute",
        bottom: 10,
        height: 360
    },
    exit:{
        backgroundColor: "#fff",
        padding: 10,
        positiono: "absolute",
        top:170,
        left: 15,
        borderRadius: 30
    }
})