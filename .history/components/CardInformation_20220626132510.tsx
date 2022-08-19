import { Text, Button, StyleService } from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

import { View, StyleSheet } from 'react-native'
import { Property } from "../types/property"
import { Row } from './Row'

export const CardInformation = ({property} : {property: Property}) => {
    return(
        <View style={styles.informationContainer}>
        <Row style={styles.rowJustification}>
          <Text category="s1">
            ${property.rentLow.toLocaleString()} -{" "} {property.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons name="heart-outline" color={theme["color-primary-500"]} size={24}/>
        </Row>
        <Text category="c1">
          {property.bedroomLow} - {property.bedroomsHigh} BEDS
        </Text>
        <Text category="c2" style={styles.defaultMarginTop}>
          {property.name} 
        </Text>
        <Text category="c1">{property.street}</Text>
        <Text category="c1">
          {property.city}, {property.state}, {property.zip}
        </Text>

        <Text category="c1" style={styles.defaultMarginTop}>
          {property.tags.map((tag,index ) => index === property.tags.length -1 ? tag : `${tag}, `)}
        </Text>

        <Row style={[styles.defaultMarginTop, styles.rowJustification]}>
          <Button appearance={"ghost"}
          style={[
            {
            borderColor: theme["color-primary-500"],
          },
          styles.button
          ]}
          size="small"
           onPress={() => console.log("Email the property Manager")}
           >
            Email
          </Button>
          <Button 
           style={
            styles.button
           }
           onPress={() => console.log("Call the property Manager")}
           >
            Call
           </Button>
        </Row>
      </View>
    )
}

const styles = StyleSheet.create({
    button: {
      width: "49%"
    },
    defaultMarginTop: {
      marginTop: 5,
    },
    rowJustification: {
      justifyContent: "space-between",
    },
    informationContainer: {
       paddingVertical: 10, 
       paddingHorizontal: 5, 
       borderWidth: 1, borderColor: "#d3d3d3", 
       borderBottomLeftRadius: 5, borderBottomRightRadius: 5 
    }
  })