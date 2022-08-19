import { Platform, ViewStyle, StyleSheet, TouchableOpacity } from "react-native";
import * as AppleAuthentication from 'expo-apple-authentication'

export const AppleButton = ({
    type, 
    onPress
}: {
    type: "signIn" | "signUp";
    onPress: () => void
}) => {
    if(Platform.OS != "ios") return null;
    if(!AppleAuthentication.isAvailableAsync()) return null;
    return(
       <AppleAuthentication.AppleAuthenticationButton 
         
       />
    )
}

const styles = StyleSheet.create({

})