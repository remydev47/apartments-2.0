import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components"
import { LISTMARGIN } from "../constants";
import { theme } from '../theme';
import { Row } from './Row';
import { MaterialCommunityIcons }  from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

 export const HeaderLogisticButton = ({label, onPress, iconName, style}: {onPress: () => void, label:string, iconName?:any, style?:any }) => {
    return(
        <TouchableOpacity onPress={onPress}>
              <Row style={styles.textMap}>
                {iconName ? 
                 <MaterialCommunityIcons 
                   name={iconName}
                   size={24} 
                   color={theme["color-info-300"]} 
                  /> : 
                 null 
                }
                 <Text category={"c1"} style={styles.logisticsButtontext}>
                    {label}
                  </Text>
              </Row>
       </TouchableOpacity>
    )
 }

export const HeaderLogistics = ({ mapShown, setMapShown } : { mapShown: boolean; setMapShown: (bool: boolean) => void;}) => {

    const navigation = useNavigation()

    const handleMapPress = () => {
        navigation.setOptions({ tabBarStyle : { display: "flex" } })
        if (mapShown) return setMapShown(false)
        setMapShown(true)
    }
    return(
        <Row style={styles.container}>
          <Row style={styles.row}>
            <MaterialCommunityIcons name="map-marker" size={24} color={theme["color-primary-500"]} />
            <Text category={"c1"} appearance={"hint"}>12 Available</Text>
            <HeaderLogisticButton label="Save" onPress={() => console.log("Save")} style={styles.textSave} />
          </Row>
          <Row>
            <HeaderLogisticButton label="Sort" iconName="sort" onPress={() => console.log("Sort")} />
            { mapShown ?
              <HeaderLogisticButton 
               label="List" 
               iconName="format-list-bulleted" 
               onPress={handleMapPress} 
              />
             : 
             <HeaderLogisticButton 
                label="Map"
                iconName="map-outline"
                onPress={handleMapPress}
             />
            }
          </Row>
        </Row>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        justifyContent: "space-between", 
        marginHorizontal: LISTMARGIN, 
        marginVertical: 5
    },
    textSave: {
        fontWeight: "bold",
        marginLeft: 5, 
        color: theme["color-info-300"]
    },
    textSort:{
        fontWeight: "bold",
        marginLeft: 5, 
        color: theme["color-info-300"]
    },
    textMap: {
        alignItems: "center", 
        marginLeft: 20
    },
    row: {
        alignItems: "center", 
    },
    logisticsButtontext: {
        fontWeight: "bold",
        marginLeft: 5, 
        color: theme["color-info-300"]
    }
})