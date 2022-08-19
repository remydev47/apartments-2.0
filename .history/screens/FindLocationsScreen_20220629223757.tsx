import { useState } from 'react'
import { Platform, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components'
import { ModalHeader } from '../components/ModalHeader';
import { Screen } from '../components/Screen';
import { useNavigation } from '@react-navigation/native';
import { getSuggestedLocations } from '../services/location';
import { Location } from '../types/locationIQ';

import { theme } from '../theme'
import { Row } from '../components/Row';

export const FindLocationsScreen = () => {
    const [value, setValue] = useState("");
    const navigation = useNavigation();
    const[suggestions, setSuggestions] = useState<Location[]>([])

    const handleChange = async (val: string) => {
      setValue(val);
      if(val.length > 2) {
         const locations = await getSuggestedLocations(val);
         if(locations.length > 0) setSuggestions(locations)
      } else if (val.length === 0 ) setSuggestions([])
    }
    const handleSubmitEditing =  async () => {
      const locations = await getSuggestedLocations(value);
      if(locations.length > 0) {
         console.log("navigate to search screen", locations[0]);
      }
    }

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
    const SuggestedText = ({locationItem} : {locationItem: Location}) => {
      const location = getFormmatedLocationText(locationItem)
      return(
         <Row style={styles.suggestionContainer}>
            <Text>{location}</Text>
         </Row>
      )
    }

   return (
       <Screen> 
         {Platform.OS === "ios" ? <ModalHeader />: null }
         <View style={styles.screenContent}>{getInput()}
           {suggestions.length > 0 ?
           <FlatList 
             showsVerticalScrollIndicator={false}
             data={suggestions}
             keyExtractor={(item, index) => item.place_id + index}
             renderItem={({item, index}) => (
               <TouchableOpacity
                 onPress={() => (
                  console.log(item)
                 )}
               >
                  <SuggestedText />
               </TouchableOpacity>
             )}
           />
           : null}
         </View>
      </Screen>
    )
}

const styles = StyleSheet.create({
   screenContent: {
      marginHorizontal: 10
   },
   defaultMarginTop: {
    marginTop: 10,
   },
   suggestionContainer: {
      alignItems: "center",
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme["color-gray"],
   }
})