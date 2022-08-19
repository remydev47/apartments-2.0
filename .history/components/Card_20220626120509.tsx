import React, { useRef, useState } from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, Pressable, ViewStyle } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Property } from '../types/property';
import { ImageCarousel } from './ImageCarousel';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;


export const Card = ({ property, style  : {property: Property, style?: ViewStyle }) => {

    const flatListRef = useRef<FlatList | null>(null)
    const viewConfig = {viewAreaCoveragePercentThreshold: 95}
    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef(({changed} : {changed: any}) => {
      if(changed[0]. isViewable) {
        setActiveIndex(changed[0].index)
      }
    });

    const hundlePressLeft = () => {
        if ( activeIndex === Image.length - 1 )
         return flatListRef.current?.scrollToIndex({
          animated: false,
          index: 0,
         });
         flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
         });
      }
    
      const hundlePressRight = () => {
        if ( activeIndex === 0)
         return flatListRef.current?.scrollToIndex({
          animated: false,
          index:  Image.length - 1,
         });
         flatListRef.current?.scrollToIndex({
          index: activeIndex - 1,
         });
      }


    return(
      <View style={style}>
      <FlatList 
        ref={(ref) => (flatListRef.current = ref )}
        data={property.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({property, index}) => (
          <Image source={{ uri: property }} style={{ height: 225, width: WIDTH }}/>
        )}
        keyExtractor={(property) => property}
      />
      
      <Pressable
        style={{ 
          position: "absolute", top: 95, left: 5 
         }}
         onPress={hundlePressLeft}
       >
       <MaterialCommunityIcons  
         name="chevron-left" 
         color="#fff" size={45} 
        />
      </Pressable>
      <Pressable 
         style={{ 
          position: "absolute", top: 95, right: 5 
          }} 
          onPress={hundlePressRight}
      >
      <MaterialCommunityIcons  
        name="chevron-right" 
        color="#fff" size={45}
       />
      </Pressable>

      <View style={{ paddingVertical: 10, paddingHorizontal: 5, borderWidth: 1, borderColor: "#d3d3d3", borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between"}}>
          <Text category="s1">
            ${property.rentLow.toLocaleString()} -{" "} {property.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]} size={24}/>
        </View>
        <Text category="c1">
          {property.bedroomLow} - {property.bedroomsHigh} BEDS
        </Text>
        <Text category="c2" style={{ marginTop: 5,}}>
          {property.name} 
        </Text>
        <Text category="c1">{property.street}</Text>
        <Text category="c1">
          {property.city}, {property.state}, {property.zip}
        </Text>

        <Text category="c1" style={{ marginTop: 5 }}>
          {property.tags.map((tag,index ) => index === property.tags.length -1 ? tag : `${tag}, `)}
        </Text>

        <View 
         style={{ 
             flexDirection: 'row', marginTop: 5, justifyContent: "space-between" 
             }}
        >
          <Button appearance={"ghost"}
          style={{
            borderColor: theme["color-primary-500"],
            width: "49%"
          }}
          size="small"
           onPress={() => console.log("Email the property Manager")}
           >
            Email
          </Button>
          <Button 
           style={{
            width: "49%"
           }}
           onPress={() => console.log("Call the property Manager")}
           >
            Call
           </Button>
        </View>
      </View>
      </View>
    )
}