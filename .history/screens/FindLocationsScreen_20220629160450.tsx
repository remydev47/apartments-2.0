import { useState } from 'react'
import { Platform, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components'
import { ModalHeader } from '../components/ModalHeader';
import { Screen } from '../components/Screen';

import { theme } from '../theme'

export const FindLocationsScreen = () => {
    const [value, setValue] = useState("");

    const getInput = () => {
        if(Platform.OS === "ios")
         return (
            <Input 
              keyboardType="default"
              autoFocus
              selectionColor={theme["color-primary-500"]}
              placeholder="Enter Location"
              size={"large"}
              value={value}
              onChangeText={handleChange}
              onSubmitEditing={handleSubmitEditing}
              style={styles.defaultMarginTop}
            />
         )
    }

    return (
       <Screen> {Platform.OS === "ios" ? <ModalHeader />: null }</Screen>
    )
}

const styles = StyleSheet.create({

})