import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@ui-kitten/components";
import * as WebBrowser from 'expo-web-browser';

import { GoogleLogo } from './logos/GoogleLogo';


WebBrowser.maybeCompleteAuthSession();

export const GoogleButton = ({
    text, 
    style, 
    onPress
}: {
    text: string;
    style?: ViewStyle;
    onPress?: () => void;
}) => {
    return(
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <GoogleLogo style={styles.logo} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})