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
              <Text>
                Please enter your email and we'll send yoy a link to reset your Password
              </Text>
              <Formik
               initialValues={{
                email:""
               }}
               validationSchema={yup.object().shape({
                email:yup.string().email().required("Your Email Is Required"),
               })}
               onSubmit={(values) => {
                console.log("submit to the server", values),
                setEmailSent(true)
                }}
              >
                {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleSubmit,
                     isSubmitting,
                     setFieldValue,
                     setFieldTouched
                })=> {
                    return(
                        <>
                         <Input 
                           style={styles.input}
                           value={values.email}
                           onChangeText={handleChange("email")}
                           placeholder="Your Email address"
                           keyboardType="email-address"
                           autoCapitalize="none"
                           autoComplete="email"
                           label="Email"
                           onBlur={() => setFieldTouched("Email")}
                           caption={
                            touched.email && errors.email ? errors.email: undefined
                           }
                           status={touched.email && errors.email ? 'danger' : "basic"}
                         />
                         <Button
                           style={styles.button}
                           onPress={() => handleSubmit()}
                          >
                           Continue
                         </Button>
                        </>
                    );
                }}
              </Formik>
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
    },
    button: {
        marginTop: 20
    },
    input:{}
})