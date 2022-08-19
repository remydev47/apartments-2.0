import {View, StyleSheet, Dimensions, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { Screen } from '../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2 ;

const SearchScreen = () => {

  const property = {
    images: [
      'https://i.pinimg.com/originals/fb/f0/0a/fbf00af53f19f6a4b108fe6ea2c7b500.jpg',
      'https://miamiluxuryrealestates.com/wp-content/uploads/2020/09/north.-bay-road-miami-beach-houses-for-sale-e1600787576757.jpeg'
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
    tags:['Parking']
  }

    return(
      <Screen
        style={{
          marginHorizontal: LISTMARGIN
        }}
      >
        <View style={{ flexDirection: 'row'}}>
          <Text>
            ${property.rentLow.toLocaleString()} - {property.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons />
        </View>
         <View>
          <Image 
             source={{ uri: property.images[0]}}
             style={{
              height: 250,
              width: WIDTH
             }}
          />
         </View>
      </Screen>
    )
}

export default SearchScreen;