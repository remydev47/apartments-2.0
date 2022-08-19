import {View, StyleSheet,ViewStyle } from "react-native";
import { Text } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../theme";
import { Row } from "./Row";

export const ModalHeader = (
    {
     xShown,
     text, 
     style 
    }: {
        xShown: boolean; 
        text: string; 
        style?:ViewStyle | ViewStyle[];
    }) => {
        const navigation = useNavigation()
        
        if (text) {
            return (               
                <Row>
                    {xShown ? (
                        <MaterialCommunityIcons 
                          onPress={navigation.goBack}
                          style={styles.x}
                          name="close"
                          color={theme['color-gray']}
                          size={24}
                        />
                   ) : null }
                    <Text category={"h5"}>{text}</Text>
                </Row>
            )
        }
        <View>
            <View/>
        </View>
}

const styles = StyleSheet.create({
    x: {
        position: "absolute",
        left: 10,
        alignItems: "center"
    }
})