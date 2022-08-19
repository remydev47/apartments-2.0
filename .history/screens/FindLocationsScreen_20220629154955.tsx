import { useState } from 'react'
import { Platform } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components'
import { ModalHeader } from '../components/ModalHeader';
import { Screen } from '../components/Screen';

import { theme } from '../theme'

export const FindLocationsScreen = () => {
    const [value, setValue] = useState();

    const getInput = () => {

    }

    return (
       <Screen> {Platform.OS === "ios" ? <ModalHeader />: null }</Screen>
    )
}

