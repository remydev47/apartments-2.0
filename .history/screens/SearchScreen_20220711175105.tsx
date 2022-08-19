import React, { useState, useEffect, useRef } from 'react';
import { Animated, View,StyleSheet } from 'react-native';
import { Screen } from '../components/Screen'
import { HEADERHEIGHT, LISTMARGIN } from '../constants';
import { Card } from '../components/Card';
import { AnimatedListHeader } from '../components/AnimatedListHeader';
import MapView  from 'react-native-maps'
import { getPropertiesInArea } from '../data/Properties';
import { Map } from '../components/Map';
import { SearchScreenParams } from '../types';
import { Property } from '../types/property';
import LottieView from "lottie-react-native"

const SearchScreen = ({route}: {route: {params: SearchScreenParams} }) => {
 
 
 const [ mapShown, setMapShown ] = useState<boolean>(false);
 const [scrollAnimation] = useState(new Animated.Value(0));
 const mapRef = useRef<MapView | null>(null);
 const [ properties, setProperties ] = useState<Property[]>([]);
 const [location, setLocation] = useState<string | undefined>(undefined)

 useEffect(() => {
   if(route.params) {
    const numBoundingBox = [
      Number(route.params.boundingBox[0]),
      Number(route.params.boundingBox[1]),
      Number(route.params.boundingBox[2]),
      Number(route.params.boundingBox[3]),
    ];

    setLocation (route.params.location);
    setProperties(getPropertiesInArea(numBoundingBox))

    mapRef?.current?.animateCamera({
      center :{
        latitude: Number(route.params.lat),
        longitude: Number(route.params.lon)
      }
    })
   }
 }, [route])
 

  return (
    <Screen>
      <AnimatedListHeader 
       scrollAnimation={scrollAnimation} 
       setMapShown={setMapShown} 
       mapShown={mapShown}
       location={route.params ? route.params.location : "Find Location"}
       availableProperties={properties ? properties.length : undefined}
      />
      {
        mapShown ? (
         <Map 
           properties={properties} 
           mapRef={mapRef}
           initialRegion= {
            route.params
            ?
            {
              latitude: Number(route.params.lat),
              longitude: Number(route.params.lon),
              latitudeDelta: 0.4,
              longitudeDelta: 0.4
            }
            : undefined
           } 
          />
      ) : (
        <>
        {properties.length > 0 ? (
        <Animated.FlatList 
         onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y : scrollAnimation,
              }
            }
          }
         ],{useNativeDriver: true})}
         contentContainerStyle={{ paddingTop: HEADERHEIGHT - 20 }}
         bounces={false}
         scrollEventThrottle={16}
         data={properties} 
         showsVerticalScrollIndicator={false}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({item}) => (<Card style={{ marginVertical: 5 }} property={item} />
         )}
        /> 
        ) : (
          <View style={styles.lottieContainer}>
            <LottieView 
              autoPlay
              loop
              style={styles.lottie}
              source={require("../assets/lotties/SearchScreen.json")}
            />
          </View>
         )}
        </>
      )} 
    </Screen>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  lottieContainer:{
    backgroundColor:"#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lottie:{
    
  }
})