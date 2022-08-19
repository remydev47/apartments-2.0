import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react'
import { Animated, FlatList, LayoutChangeEvent, Platform, TouchableOpacity, View,StyleSheet } from 'react-native';
import { HEADERHEIGHT, LISTMARGIN } from '../constants';
import { Button, Divider, Text } from "@ui-kitten/components"
import { theme } from '../theme';
import { Row } from './Row';
import { HeaderInput } from './HeaderInput';

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
            iconName: "filter-variant",
            onPress: () => console.log("filter All")
        },
        {
            label: "Price",
            onPress: () => console.log("Price")
        },
        {
            label: "Beds & Baths",
            onPress: () => console.log("Beds and Bath")
        },
        {
            label: "Move-in-Date",
            onPress: () => console.log("Move in date")
        },
        {
            label: "Pets",
            onPress: () => console.log("pets")
        }
    ]

    return(
       < Animated.View
        style={[
          styles.container,
          {
            transform: [{translateY: navbarTranslate}],
          },
        ]}
        onLayout={onLayout}
      >
        <View style={{ marginHorizontal: LISTMARGIN}}>
             <HeaderInput />
             
        </View>
        <Divider style={{ backgroundColor: theme["color-gray"]}}/>
        <Row style={{ alignItems: "center", justifyContent: "space-between", marginHorizontal: LISTMARGIN, marginVertical: 5}}>
          <Row>
            <MaterialCommunityIcons name="map-marker" size={24} color={theme["color-primary-500"]} />
            <Text category={"c1"} appearance={"hint"}>12 Available</Text>
            <TouchableOpacity
              onPress={() => console.log("save")}
            >
              <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                Save
              </Text>
            </TouchableOpacity>
          </Row>
          <Row>
             <TouchableOpacity onPress={() => console.log("sort")}>
              <Row style={{ alignItems: "center"}}>
                 <MaterialCommunityIcons name="sort" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                    Sort
                  </Text>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("map")}>
              <Row style={{ alignItems: "center", marginLeft: 20 }}>
                 <MaterialCommunityIcons name="map-outline" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                    Map
                  </Text>
              </Row>
            </TouchableOpacity>
          </Row>
        </Row>
      </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
          position: "absolute",
          top:0,
          right: 0,
          left: 0,
          zIndex: 1000,
          height: HEADERHEIGHT,
          backgroundColor: "#fff",
    },
    button:{
         borderRadius: 30, 
         borderColor: "#d3d3d3" ,
         marginHorizontal: 3
    },
})