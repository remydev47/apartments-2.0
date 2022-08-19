import { Text } from 'react-native';
import { Screen } from '../components/Screen'

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
      <Screen>
         <Text>Search screen</Text>
      </Screen>
    )
}

export default SearchScreen;