import React from 'react';
import { View, StyleSheet, Dimensions, Image, FlatList, Pressable, ViewStyle } from 'react-native';
import { Property } from '../types/property';
import { ImageCarousel } from './ImageCarousel';
import { CardInformation } from './CardInformation';

const LISTMARGIN = 10;


export const Card = ({ 
  property,
  style, 
} : { 
  property: Property; 
  style?:ViewStyle;
}) => {
    return(
      <View style={[styles.container, style]}>
        <ImageCarousel images={property.images} />
        <CardInformation property={property} />
      </View>
    )
}

const styles = StyleSheet.create({
  button: {
    width: "49%"
  },
  defaultMarginTop: {
    marginTop: 5,
  },
  rowJustification: {
    justifyContent: "space-between",
  },
  informationContainer: {
     paddingVertical: 10, 
     paddingHorizontal: 5, 
     borderWidth: 1, borderColor: "#d3d3d3", 
     borderBottomLeftRadius: 5, borderBottomRightRadius: 5 
  },
  container:{
    marginHorizontal: LISTMARGIN,
    borderRadius: 5,
    backgroundColor: 'white' 
  }
})