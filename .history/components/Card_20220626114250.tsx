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
      <View>
      <FlatList 
        ref={(ref) => (flatListRef.current = ref )}
        data={item.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({item, index}) => (
          <Image source={{ uri: item }} style={{ height: 225, width: WIDTH }}/>
        )}
        keyExtractor={(item) => item}
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
            ${item.rentLow.toLocaleString()} -{" "} {item.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]} size={24}/>
        </View>
        <Text category="c1">
          {item.bedroomLow} - {item.bedroomsHigh} BEDS
        </Text>
        <Text category="c2" style={{ marginTop: 5,}}>
          {item.name} 
        </Text>
        <Text category="c1">{item.street}</Text>
        <Text category="c1">
          {item.city}, {item.state}, {item.zip}
        </Text>

        <Text category="c1" style={{ marginTop: 5 }}>
          {item.tags.map((tag,index ) => index === item.tags.length -1 ? tag : `${tag}, `)}
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
           onPress={() => console.log("Email the item Manager")}
           >
            Email
          </Button>
          <Button 
           style={{
            width: "49%"
           }}
           onPress={() => console.log("Call the item Manager")}
           >
            Call
           </Button>
        </View>
      </View>
      </View>
    )
}