import React, { useRef, useState } from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, Pressable } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { Screen } from '../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Card } from '../components/Card';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;


const SearchScreen = () => {
  const property = {
    // id: 1,
     images: [
       'https://luxo.estate/wp-content/uploads/2017/02/rsz_bedroom-3.jpg',
       'https://photos.zillowstatic.com/fp/053b9224b6a38c3f44ac5720d412a268-p_e.jpg',
       'https://www.mercuryestate.com/assets/catalogue/1200x800/7573cecda49154abfedf7de3f148b610.jpg',
       'https://media1.condo.com/buildings/img/92373714/8e49f229-c46e-4bc9-b0d0-b9f95436846d_dt.jpg',
       'https://3xtdgy42fsex36bhen2njy7w-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/otm07-800x600.jpg'
     ],
     rentLow:3750,
     rentHigh: 35054,
     bedroomLow: 1,
     bedroomsHigh: 5,
     name: 'THE Hamilton',
     street: '555 NE 355 SE',
     city: 'Miami',
     state: 'Florida',
     zip: 32137,
     tags:["Parking"],
   }
 //   {
 //     id:2,
 //     images: [
 //     'https://i.pinimg.com/originals/87/cb/df/87cbdf4bb8f8219be03f23ec18a0dace.jpg',
 //     'https://images1.forrent.com/i2/weZwe7spKoRw9cFqSPLLQhnYcquj7avHmbDEaCnSXLI/112/image.jpg',
 //     'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_2000/v1577403491/g5/g5-c-idgh48mn-pacific-urban-residential/g5-cl-56m2hmea6-domus-on-the-boulevard/uploads/DomusWeb2142_rzr0b6.jpg',
 //     'https://s3-media0.fl.yelpcdn.com/bphoto/6JzFccegDjl7n_4O8UFjfQ/l.jpg',
 //     'https://photos.zillowstatic.com/fp/ef1f6c85e64de01ec2634445cef5c54d-p_e.jpg'
 //   ],
 //   rentLow:3750,
 //   rentHigh: 35054,
 //   bedroomLow: 3,
 //   bedroomsHigh: 4,
 //   name: 'THE ShelterRealty',
 //   street: '512 NE 327 SE',
 //   city: 'NEVADA',
 //   state: 'LaVegas',
 //   zip: 32137,
 //   tags:["Dog park"],
 // }]
 
   const flatListRef = useRef<FlatList | null>(null)
   const viewConfig = {viewAreaCoveragePercentThreshold: 95}
   const [activeIndex, setActiveIndex] = useState(0);
   const onViewRef = useRef(({changed} : {changed: any}) => {
     if(changed[0]. isViewable) {
       setActiveIndex(changed[0].index)
     }
   });
 
   const hundlePressLeft = () => {
     if ( activeIndex === property.images.length - 1 )
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
       index:  property.images.length - 1,
      });
      flatListRef.current?.scrollToIndex({
       index: activeIndex - 1,
      });
   }

  return (
    <Screen style={{ marginHorizontal: LISTMARGIN }}>
      <View>
      <FlatList 
        ref={(ref) => (flatListRef.current = ref )}
        data={property.images}
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
           onPress={() => console.log("Email the Property Manager")}
           >
            Email
          </Button>
          <Button 
           style={{
            width: "49%"
           }}
           onPress={() => console.log("Call the Property Manager")}
           >
            Call
           </Button>
        </View>
      </View>
      </View>
    </Screen>
  )
}

export default SearchScreen;