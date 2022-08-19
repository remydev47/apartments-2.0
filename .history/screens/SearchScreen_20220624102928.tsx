import React, { useRef, useState } from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, Pressable } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { Screen } from '../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;

const SearchScreen = () => {

  const properties = [{
    id: 1,
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
  },
  {
    id:2,
    images: [
    'https://i.pinimg.com/originals/87/cb/df/87cbdf4bb8f8219be03f23ec18a0dace.jpg',
    'https://images1.forrent.com/i2/weZwe7spKoRw9cFqSPLLQhnYcquj7avHmbDEaCnSXLI/112/image.jpg',
    'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_2000/v1577403491/g5/g5-c-idgh48mn-pacific-urban-residential/g5-cl-56m2hmea6-domus-on-the-boulevard/uploads/DomusWeb2142_rzr0b6.jpg',
    'https://s3-media0.fl.yelpcdn.com/bphoto/6JzFccegDjl7n_4O8UFjfQ/l.jpg',
    'https://photos.zillowstatic.com/fp/ef1f6c85e64de01ec2634445cef5c54d-p_e.jpg'
  ],
  rentLow:3750,
  rentHigh: 35054,
  bedroomLow: 1,
  bedroomsHigh: 5,
  name: 'THE Zillow',
  street: '555 NE 355 SE',
  city: 'Miami',
  state: 'Florida',
  zip: 32137,
  tags:["Dog park"],
}]

  const flatListRef = useRef<FlatList | null>(null)
  const viewConfig = {viewAreaCoveragePercentThreshold: 95}
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(({changed} : {changed: any}) => {
    if(changed[0]. isViewable) {
      setActiveIndex(changed[0].index)
    }
  });

  const hundlePressLeft = () => {
    if ( activeIndex === properties.images.length - 1 )
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
      index:  properties.images.length - 1,
     });
     flatListRef.current?.scrollToIndex({
      index: activeIndex - 1,
     });
  }

    return(
      <Screen
        style={{
          marginHorizontal: LISTMARGIN
        }}
      >
        <FlatList 
           data={properties} 
           showsVerticalScrollIndicator={false}
           keyExtractor={(item) =>  item.id.toLocaleString()}
           renderItem={({item}) => (
            <View 
            style={{
               borderColor: '#d3d3d3', borderRadius: 5, borderWidth: 1
               }}
              >
                <FlatList 
                  ref={(ref) => (flatListRef.current=ref)}
                  data={properties.images}
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
                  ${properties.rentLow.toLocaleString()} 
                 - {properties.rentHigh.toLocaleString()}
               </Text>
               <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]}
              size={25}
              />
              </View>
              <Text category={'c1'}>{properties.bedroomLow}-{properties.bedroomsHigh} Beds </Text>
              <Text category={"c1"} style={{ marginTop: 5 }}>{properties.name}</Text>
              <Text category={"c1"}>{properties.street}</Text>
              <Text category={"c1"}>
                {properties.city}- {properties.state}. {properties.zip}
              </Text>
              <Text style={{ marginTop: 5}}>
                {properties.tags.map((tag, index) => 
                 index === properties.tags.length - 1 ? tag : `${tag}`,
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
           )}
        />
      </Screen>
    )
}

export default SearchScreen;