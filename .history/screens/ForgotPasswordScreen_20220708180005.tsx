import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
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
          <Screen style={styles.container}>
            <ModalHeader text="JumbaApartments" xShown={true} />
            {emailSent ? (
            <>
              <Text category="h5" style={styles.header}>
                Email sent
              </Text>
              <Text>
                An Email containing instruction on how to recet your password has been sent
                Please Check your junk email or spam email if you dont see an email
             </Text>
            </>
            ):(
            <>
              <Text category={"h5"} style={styles.header}>
                Forgot Your Password?
              </Text>
            </>
            )}
           </Screen>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    header:{
        textAlign: "center",
        marginVertical: 20,
    }
})