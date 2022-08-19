import React, { useState } from 'react'
import { Input} from '@ui-kitten/components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextStyle, TouchableOpacity, StyleSheet } from 'react-native';
import { EvaStatus } from '@ui-kitten/components/devsupport/typings';

export const PasswordInput = ({
    value,
    style,
    onChangeText,
    placeholder= "Your Password",
    label= "password",
    onBlur,
    caption,
    status,
}:{
    value: string;
    style: TextStyle;
    onChangeText: (text: string) => void
    placeholder?: string;
    label: string;
    onBlur?: () => void;
    caption?: string;
    status?: EvaStatus
}) => {
    const [ passwordHidden, setPasswordHidden ] = useState<boolean>(true)
    const geteyeIcon = () => {
        if(passwordHidden)
        return(
            <MaterialCommunityIcons 
             size={24}
             name="eye-off-outline"
             color='black'
            />
        )
    }

    return()
}

const styles = StyleSheet.create({
    eyeContainer: {
        paddingHorizontal: 10
    }
})