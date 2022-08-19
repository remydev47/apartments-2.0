import { StyleSheet, ViewStyle, View, FlatList } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { useState, useEffect, useRef } from 'react'

import { properties } from '../data/Properties';
import { Screen } from '../components/Screen';
import { Property } from '../types/property';
import { theme } from '../theme';
import { Row } from '../components/Row';
import { Card } from '../components/Card';

export const SavedScreen = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    return(
        <Screen style={styles.screen}>
            <Row  style={styles.buttonContainer}>
                <Button style={[styles.button, styles.favourtitesButton]} size={"small"}>Favourites</Button>
                <Button style={[styles.button, styles.contactedButton]} size={"small"}>Contacted</Button>
                <Button style={[ styles.button, styles.applicationButton]} size={"small"} >Application</Button>
            </Row>
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
    contactedButton:{borderLeftWidth: 0, borderRightWidth: 0}
 })
