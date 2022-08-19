import { StyleSheet, ViewStyle, View, FlatList,  } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import React, { useState, useEffect, useRef } from 'react'
import LottieView from "lottie-react-native"

import { properties } from '../data/Properties';
import { Screen } from '../components/Screen';
import { Property } from '../types/property';
import { theme } from '../theme';
import { Row } from '../components/Row';
import { Card } from '../components/Card';

export const SavedScreen = () => {

    const [ activeIndex, setActiveIndex ] = useState<number>(0);

    const getButtonAppearance = (buttonIndex: number) => {
        if( activeIndex === buttonIndex ) return "filled"
        return "ghost"
    }

    const handleButtonPress = (index: number) => {
      setActiveIndex(index)
    }

    const getBody= () => {
        if ( activeIndex === 0 )
         return (
            <>
              <LottieView 
                autoPlay
                style={styles.lottie}
                source={require("../assets/lotties/Favourites.json")}
              />
            </>
         )
       
        if ( activeIndex === 1 ) return;
    }

    return(
        <Screen style={styles.screen}>
            <Row  style={styles.buttonContainer}>
                <Button 
                  appearance={getButtonAppearance(0)}
                  style={[styles.button, styles.favourtitesButton]} 
                  size={"small"}
                  onPress={() => handleButtonPress(0)}
                 >
                  Favourites
                 </Button>
                <Button 
                 appearance={getButtonAppearance(1)}
                 style={[styles.button, styles.contactedButton]} 
                 size={"small"}
                 onPress={() => handleButtonPress(1)}
                >
                    Contacted
                </Button>
                <Button 
                 appearance={getButtonAppearance(2)}
                 style={[ styles.button, styles.applicationButton]} 
                 size={"small"} 
                 onPress={() => handleButtonPress(2)}
                >
                 Application
                </Button>
            </Row>
            <View>
                {getBody()}
            </View>
        </Screen>
    )
}
 const styles = StyleSheet.create({
    screen: {
        marginHorizontal: 10,
    },
    buttonContainer: {
        alignItems: "center",
        borderRadius: 5
    },
    button: {
        width: "33.3%",
        borderRadius: 0,
        color: theme["color-primary-500"]
    },
    applicationButton:{borderTopRightRadius: 5, borderBottomRightRadius: 5},
    favourtitesButton:{borderTopLeftRadius: 5, borderBottomLeftRadius: 5},
    contactedButton:{borderLeftWidth: 0, borderRightWidth: 0},
    lottie: {
        height: 180,
        width: 180,
        marginBottom: 20,
        alignSelf: "center"
    }
 })
