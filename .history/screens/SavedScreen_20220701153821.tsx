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
    return(
        <Screen style={styles.screen}>
            <Row  style={styles.buttonContainer}>
                <Button>Favourites</Button>
                <Button>Contacted</Button>
                <Button>Application</Button>
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
    }
 })
