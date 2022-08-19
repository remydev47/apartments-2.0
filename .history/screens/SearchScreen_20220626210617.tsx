import React, { useState } from 'react';
import { FlatList,  Animated, LayoutChangeEvent } from 'react-native';
import { Screen } from '../components/Screen'
import { LISTMARGIN } from '../constants';
import { Card } from '../components/Card';

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
   bedroomLow: 3,
   bedroomsHigh: 4,
   name: 'THE ShelterRealty',
   street: '512 NE 327 SE',
   city: 'NEVADA',
   state: 'LaVegas',
   zip: 32137,
   tags:["Dog park"],
 },
 {
  id:3,
  images: [
  'https://i.pinimg.com/originals/87/cb/df/87cbdf4bb8f8219be03f23ec18a0dace.jpg',
  'https://images1.forrent.com/i2/weZwe7spKoRw9cFqSPLLQhnYcquj7avHmbDEaCnSXLI/112/image.jpg',
  'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_2000/v1577403491/g5/g5-c-idgh48mn-pacific-urban-residential/g5-cl-56m2hmea6-domus-on-the-boulevard/uploads/DomusWeb2142_rzr0b6.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/6JzFccegDjl7n_4O8UFjfQ/l.jpg',
  'https://photos.zillowstatic.com/fp/ef1f6c85e64de01ec2634445cef5c54d-p_e.jpg'
],
rentLow:3750,
rentHigh: 35054,
bedroomLow: 3,
bedroomsHigh: 4,
name: 'THE ShelterRealty',
street: '512 NE 327 SE',
city: 'NEVADA',
state: 'LaVegas',
zip: 32137,
tags:["Dog park"],
}]
 
 const [scrollAnimation] = useState(new Animated.Value(0));
 const [offsetAnimation] = useState(new Animated.Value(0));
 const [clampedScroll, setClampedScroll] = useState(
  Animated.diffClamp(
    Animated.add(
      scrollAnimation.interpolate({
        inputRange: [0,1],
        outputRange: [0,1],
        extrapolateLeft: "clamp"
      }),
      offsetAnimation
    ),
    0,
    1
  )
 )

 const navbarTranslate = clampedScroll.interpolate({
  inputRange: [0, 250],
  outputRange: [0, -250],
  extrapolate: "clamp"
 })

 const onLayout = (event: LayoutChangeEvent) => {
  let {height} = event.nativeEvent.layout
  setClampedScroll(
    Animated.diffClamp(
      Animated.add(
        scrollAnimation.interpolate({
          inputRange: [0,1],
          outputRange: [0,1],
          extrapolateLeft: "clamp"
        }),
        offsetAnimation
      ),
      0,
      height
    )
   );
 };

  return (
    <Screen>
      <Animated.View
        style={{
          position: "absolute",
          top:0,
          right: 0,
          left: 0,
          zIndex: 1000,
          height: 250,
          backgroundColor: "red",
          transform: [{ translateY: navbarTranslate }],
        }}
        onLayout={onLayout}
      >

      </Animated.View>
      <Animated.FlatList 
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y : scrollAnimation,
              }
            }
          }
        ],{useNativeDriver: true})}
        scrollEventThrottle={16}
        data={properties} 
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: LISTMARGIN }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (<Card style={{ marginVertical: 5 }} property={item} />)}
      />
    </Screen>
  )
}

export default SearchScreen;