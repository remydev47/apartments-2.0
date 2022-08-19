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

}

const styles = StyleSheet.create({

})