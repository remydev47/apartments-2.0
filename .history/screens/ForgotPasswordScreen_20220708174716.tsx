import React, { useEffect, useState } from 'react'
import { Text, Button, Input } from "@ui-kitten/components";
import * as yup from "yup"
import { Formik } from "formik"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';

import { Screen } from "../components/Screen";
import { ModalHeader } from '../components/ModalHeader';

export const ForgotPasswordScreen = () => {
    const navigation = useNavigation
    const [emailSent, setEmailSent] = useState(false)

    return(
        <KeyboardAwareScrollView bounces={false}>
          <Screen>
            <Text>Forgot Password </Text>
           </Screen>
        </KeyboardAwareScrollView>
    )
}