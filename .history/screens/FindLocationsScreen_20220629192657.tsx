import { useState } from 'react'
import { Platform, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components'
import { ModalHeader } from '../components/ModalHeader';
import { Screen } from '../components/Screen';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../theme'
import { Row } from '../components/Row';

export const FindLocationsScreen = () => {
    const [value, setValue] = useState("");
    const navigation = useNavigation("")

    const handleChange = async (val: string) => {}
    const handleSubmitEditing =  async () => {}

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
         );

         return (
           <Row>
             <Input 
               keyboardType="default"
               autoFocus
               selectionColor={theme["color-primary-500"]}
               placeholder="Enter Location"
               size={"large"}
               value={value}
               onChangeText={handleChange}
               onSubmitEditing={handleSubmitEditing}
               style={[styles.defaultMarginTop, {width: "80%"}]}
            />
            <Button appearance={"ghost"} status="info" onPress={navigation.goBack}>
               cancel
            </Button>
           </Row>
         );
    }

    return (
       <Screen> {Platform.OS === "ios" ? <ModalHeader />: null }</Screen>
    )
}

const styles = StyleSheet.create({
   defaultMarginTop: {
    marginTop: 10,
   }
})