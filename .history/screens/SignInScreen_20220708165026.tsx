import { StyleSheet, TouchableOpacity} from 'react-native'
import { KeyBoardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import * as yup from "yup"
import { Formik } from "formik"
import { useNavigation } from '@react-navigation/native'
import { Text, Input, Button } from "@ui-kitten/components"

import { Screen } from '../components/Screen'
import { ModalHeader } from '../components/ModalHeader'
import { GoogleButton } from '../components/GoogleButton'
import { FaceBookButton } from '../components/FaceBookButton'
import { AppleButton } from '../components/AppleButton'
import { PasswordInput } from '../components/PasswordInput';
import { OrDivider } from '../components/OrDivider'

export const SignInScreen =  () => {
    const navigation = useNavigation();
    return(
       <KeyBoardAwareScrollView bounces={false}>
          <Screen style={styles.container}>
           <ModalHeader text="JumbaApartments" xShown={true} />
           <Text category={"h5"} style={styles.header}>
              SignIn
           </Text>
           <Formik
             initialValues={{
                email:"",
                password: ""
             }}
             vlidationSchema={yup.object().shape({
                email:yup.string().email().required("Your Email Is Required"),
                password:yup.string().required("A Password Is Required"),
             })}
             onSubmit={(values) => {
                console.log("login passing values to server", values)
             }}
           >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                setFieldTouched
            }) => {
                return(
                    <>
                     <Input 
                       style={styles.input}
                       value={values.email}
                       onChangeText={handleChange("email")}
                       placeholder="Your email Address"
                       autoCapitalize="none"
                       keyboardType="email-address"
                       textContentType="emailAddress"
                       autoComplete="email"
                       label="Email"
                       onBlur={() => setFieldTouched("email")}
                       caption={
                        touched.email && errors.email ? errors.email: undefined
                       }
                       status={touched.email && errors.email ? 'danger' : "basic"}
                     />
                     <PasswordInput 
                       style={styles.input}
                       value={values.password}
                       onChangeText={handleChange("password")}
                       placeholder="Your Password"
                       label="Pasword"
                       onBlur={() => setFieldTouched("Password")}
                       caption={
                        touched.password && errors.password
                          ? errors.password
                          : undefined
                       }
                       status={touched.email && errors.email ? 'danger' : "basic"}
                     />
                     <TouchableOpacity
                      style={styles.forgotPasswordContainer}
                      onPress={() => navigation.navigate("ForgotPassword")}
                     >
                        <Text category={"c1"} status="info">
                            Forgot Your Password
                        </Text>
                     </TouchableOpacity>
                     <Button
                      style={styles.signInButtton}
                      onPress={() => handleSubmit()}
                     >
                        Sign In
                     </Button>
                     <OrDivider style={styles.orContainer} />
                    </>
                )
            }}
           </Formik>
         </Screen>
       </KeyBoardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    header:{
        textAlign: "center",
        marginVertical: 20
    },
    input: {
        marginTop: 10
    },
    forgotPasswordContainer: {
        alignItems: "flex-end",
        marginTop: 5
    },
    signInButtton: {
        marginTop: 20
    },
    orContainer: {
        marginVertical: 30
    }
})