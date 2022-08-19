import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Region } from 'react-native-maps';
import { Property } from '../types/property';
import { MapMarker } from './MapMarker';
import { useState, useRef } from 'react';
import { theme } from '../theme';
import { Card } from './Card';
import { Button } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let mapRegion: Region | undefined = undefined

export const Map = ({
    properties,
    mapRef, 
    location,
    setLocation,
    setProperties,
    initialRegion, 
} : {
    properties: Property[], 
    mapRef: React.MutableRefObject<MapView | null>,
    location: string;
    setLocation:(location : string) => void;
    setProperties: (properties: Property[]) => void;
    initialRegion?: Region | undefined
}) => {
     const [activeIndex, setActiveIndex ] = useState(-1);
     const [showSearchAreaButton, setShowSearchAreaButton] = useState(false)
     const [boundingBox, setBoundingBox ] = useState<number[]>([])
     const [region, setRegion] = useState<Region | undefined>(
        mapRegion ? mapRegion : undefined
     )
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
           provider={"google"}
           style={styles.map} 
           userInterfaceStyle={"light"} 
           ref={mapRef}
           onPress={handleMapPress}
           region={region}
           onRegionChange={(region, isGesture) => {
            if(isGesture?.isGesture) {
                if(!showSearchAreaButton) setShowSearchAreaButton(true)
                
                const newBoundingBox = [
                    region.latitude - region.latitudeDelta / 2,
                    region.latitude + region.latitudeDelta / 2,
                    region.longitude - region.longitudeDelta / 2,
                    region.longitude + region.longitudeDelta / 2,
                ];
                setRegion(region)
                setBoundingBox(newBoundingBox)
            };
           }}
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
        {showSearchAreaButton && activeIndex === -1 && 
        <Button style={styles.searchAreaButton} appearance={"ghost"}>
            Search Area
        </Button> }
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
    },
    searchAreaButton:{
        position:"absolute",
        bottom: 30,
        zIndex: 100,
        borderRadius: 30,
        alignSelf: "center",
        backgroundColor:"white",
        borderColor: theme["color-grey"],
        borderWidth: 1
    }
})