import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react'
import { Animated, FlatList, LayoutChangeEvent, Platform, TouchableOpacity, View } from 'react-native';
import { HEADERHEIGHT, LISTMARGIN } from '../constants';
import { Text } from "@ui-kitten/components"
import { theme } from '../theme';
import { Row } from './Row';

export const AnimatedListHeader = ({scrollAnimation} : {scrollAnimation: Animated.Value}) => {

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
        inputRange: [0, HEADERHEIGHT],
        outputRange: [0, -HEADERHEIGHT],
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
      
    const filterButtons = [
        {
            iconName: "filter-Variant",
            onPress: () => console.log("filter All")
        },
        {
            label: "Price",
            onPress: () => console.log("Price")
        },
        {
            iconName: "Beds & Baths",
            onPress: () => console.log("Beds and Bath")
        },
        {
            iconName: "Move-in-Date",
            onPress: () => console.log("Move in date")
        }
    ]

    return(
       < Animated.View
        style={{
          position: "absolute",
          top:0,
          right: 0,
          left: 0,
          zIndex: 1000,
          height: HEADERHEIGHT,
          backgroundColor: "#fff",
          transform: [{ translateY: navbarTranslate }],
        }}
        onLayout={onLayout}
      >
        <View style={{ marginHorizontal: LISTMARGIN}}>
            <TouchableOpacity
             onPress={() => console.log("navigate to search screen")}
             style={{
                marginTop: Platform.OS === "ios" ? 50 :30,
                borderWidth: 1,
                borderColor: "#d3d3d3",
                borderRadius: 30,
                padding: 10
             }}
            >
                <Row style={{ alignItems: "center"}}>
                  <MaterialCommunityIcons name="magnify" color={theme["color-priimary-500"]} size={28}/>
                  <Text style={{ marginLeft: 10 }}>FIND A LOCATION</Text>
                </Row>
            </TouchableOpacity>
            <FlatList />
        </View>
      </Animated.View>
    )
}