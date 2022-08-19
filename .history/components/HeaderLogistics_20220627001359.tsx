import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components"
import { LISTMARGIN } from "../constants";
import { theme } from '../theme';
import { Row } from './Row';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HeaderLogistics = () => {
    return(
        <Row style={styles.container}>
          <Row>
            <MaterialCommunityIcons name="map-marker" size={24} color={theme["color-primary-500"]} />
            <Text category={"c1"} appearance={"hint"}>12 Available</Text>
            <TouchableOpacity
              onPress={() => console.log("save")}
            >
              <Text category={"c1"} style={styles.textSave}>
                Save
              </Text>
            </TouchableOpacity>
          </Row>
          <Row>
             <TouchableOpacity onPress={() => console.log("sort")}>
              <Row style={{ alignItems: "center"}}>
                 <MaterialCommunityIcons name="sort" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={styles.textSort}>
                    Sort
                  </Text>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("map")}>
              <Row style={styles.textMap}>
                 <MaterialCommunityIcons name="map-outline" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                    Map
                  </Text>
              </Row>
            </TouchableOpacity>
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
    }
})