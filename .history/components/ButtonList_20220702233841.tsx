import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from '@ui-kitten/components';

import { theme } from "../theme";

export const ButtonList = ({
    data, 
    header,
    style, 
    borderTop, 
    marginTop
} : {
    data :{label: string; onPress:() => void}[]
    header?:string;
    style?:ViewStyle | ViewStyle;
    borderTop?: boolean;
    marginTop?: boolean;
}) => {
    return(
        <View style={[styles.container, style, { borderTopWidth: borderTop ? 1 : 0 }]}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: theme["color-gray"],
        borderBottomWidth: 1
    }
})