import {View, StyleSheet, Dimensions, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
//import { Screen } from '../components/Screen'
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
    tags:["Parking"],
  }

    return(
      <View
        style={{
          marginHorizontal: LISTMARGIN
        }}
      >
        <View 
        style={{
           borderColor: '#d3d3d3', borderRadius: 5, borderWidth: 1
           }}
          >
          <Image 
             source={{ uri: property.images[0]}}
             style={{
              height: 250,
              width: WIDTH,
              borderTopRightRadius:10,
              borderTopLeftRadius:5
             }}
          />
         </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between"}}>
          <Text category={'s1'}>
            ${property.rentLow.toLocaleString()} 
            - {property.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]}
          size={25}
          />
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
                width: '45%'
              }}
              appearance={"ghost"}
              onPress={() => console.log("Email the Property Manager")}
              >
              Email
            </Button>
            <Button 
                style={{
                  width: '45%'
                }}
              size={'small'}
              onPress={() => console.log("Call the Property Manager")}
             >
              Phone
            </Button>
          </View>
        </View>
      </View>
    )
}

export default SearchScreen;