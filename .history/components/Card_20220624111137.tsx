import React, { useRef, useState } from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, Pressable } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { Screen } from '../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;


export const Card = () => {
    return(
        <View 
            style={{
               borderColor: '#d3d3d3', borderRadius: 5, borderWidth: 1
               }}
              >
                <FlatList 
                  ref={(ref) => (flatListRef.current=ref)}
                  data={item.images}
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
                  keyExtractor={(item) => item}
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
                   ${item.rentLow.toLocaleString()} 
                 - {item.rentHigh.toLocaleString()}
               </Text>
               <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]}
              size={25}
              />
              </View>
              <Text category={'c1'}>{item.bedroomLow}-{item.bedroomsHigh} Beds </Text>
              <Text category={"c1"} style={{ marginTop: 5 }}>{item.name}</Text>
              <Text category={"c1"}>{item.street}</Text>
              <Text category={"c1"}>
                {item.city}- {item.state}. {item.zip}
              </Text>
              <Text style={{ marginTop: 5}}>
                {item.tags.map((tag, index) => 
                 index === item.tags.length - 1 ? tag : `${tag}`,
               )}
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 5, justifyContent:'space-between' }}>
              <Button 
                  style={{
                    borderColor: theme['color-primary-500'],
                    width: '48%'
                  }}
                  appearance={"ghost"}
                  onPress={() => console.log("Email the item Manager")}
                  >
                  Email
                </Button>
                <Button 
                    style={{
                      width: '48%'
                    }}
                  size={'small'}
                  onPress={() => console.log("Call the item Manager")}
                 >
                  Phone
                </Button>
              </View>
             </View>      
    )
}