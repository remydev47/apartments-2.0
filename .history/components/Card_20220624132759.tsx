import React, { useRef, useState } from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, Pressable, ViewStyle } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Property } from '../types/property';
import { ImageCarousel } from './ImageCarousel';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;


export const Card = ({property, style} : {property: Property, style?: ViewStyle }) => {
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
            <ImageCarousel images={property.images}/>
            <View 
            style={{
               borderColor: '#d3d3d3', borderRadius: 5, borderWidth: 1,
               }}
              >
                <FlatList 
                  ref={(ref) => (flatListRef.current=ref)}
                  data={property.images}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToAlignment="center"
                  pagingEnabled
                  viewabilityConfig={viewConfig}
                  onViewableItemsChanged={onViewRef.current}
                  renderItem={({item, index }) => (
                    <Image
                    source={{
                     uri: item
                    }}
                    style={{
                     height: 225,
                     width: WIDTH,
                     borderTopLeftRadius:5,
                     borderTopRightRadius:5
                    }}
                 />
                  )}
                  keyExtractor={(property) => property}
                />
                <Pressable
                  style={{ position: 'absolute', top: 95, left: 5}}
                  onPress={hundlePressLeft}
                >
                 <MaterialCommunityIcons name="chevron-left" size={45} color="#fff" /> 
                </Pressable>
                <Pressable
                  style={{ position: 'absolute', top: 95, right:5}}
                  onPress={hundlePressRight}
                >
                 <MaterialCommunityIcons name="chevron-right" size={45} color="#fff" /> 
                </Pressable>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text category={'s1'}>
                   ${property.rentLow.toLocaleString()} 
                 - {property.rentHigh.toLocaleString()}
               </Text>
               <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]}
              size={25}
              />
              </View>
              <Text category={'c1'}>{property.bedroomLow}-{property.bedroomsHigh} Beds </Text>
              <Text category={"c1"} style={{ marginTop: 5 }}>{property.name}</Text>
              <Text category={"c1"}>{property.street}</Text>
              <Text category={"c1"}>
                {property.city}- {property.state}. {property.zip}
              </Text>
              <Text style={{ marginTop: 5}}>
                {property.tags.map((tag, index) => 
                 index === property.tags.length - 1 ? tag : `${tag}`,
               )}
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 5, justifyContent:'space-between' }}>
              <Button 
                  style={{
                    borderColor: theme['color-primary-500'],
                    width: '48%'
                  }}
                  appearance={"ghost"}
                  onPress={() => console.log("Email the property Manager")}
                  >
                  Email
                </Button>
                <Button 
                    style={{
                      width: '48%'
                    }}
                  size={'small'}
                  onPress={() => console.log("Call the property Manager")}
                 >
                  Phone
                </Button>
              </View>
             </View>      
        </View>
    )
}