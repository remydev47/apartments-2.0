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


export const ResetPassword = () => {
    const navigation = useNavigation()
    return(
        <KeyBoardAwareScrollView bounces={false}>
         <Screen style={styles.container}>
          <ModalHeader text="JumbaApartments" xShown={true} />
           <Text category={"h5"} style={styles.header}>
             Reset Password
           </Text>
           <Formik
             initialValues={{
                password: "",
                passwordRepeat:""
             }}
             validationSchema={yup.object().shape({
                password:yup
                    .string()
                    .required("A Password Is Required")
                    .matches(
                        "/(?=)^&(9-378gfrnp00)",
                        "Your Pasword must have, 8 characters, 1 uppercase letter, 1 lowercase letter, 1 special character"
                    ),
                    passwordRepeat: yup
                    .string()
                    .oneOf([yup.ref("password"), null], "Password dont match")
                    .required("Required")

             })}
             onSubmit={(values) => {
                console.log("send values to server", values)
                navigation.navigate("SignIn")
             }}
           >
            {({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleSubmit,
                 setFieldTouched,
                 setFieldValue
            }) => {
                return(
                    <>
                     <PasswordInput 
                       style={styles.input}
                       value={values.password}
                       onChangeText={handleChange("password")}
                       placeholder="Your Password"
                       label="Password"
                       onBlur={() => setFieldTouched("Password")}
                       caption={
                        touched.password && errors.password
                          ? errors.password
                          : undefined
                       }
                       status={touched.password && errors.password ? "danger" : "basic"}
                     />
                      <PasswordInput 
                       style={styles.input}
                       value={values.password}
                       onChangeText={handleChange("passwordRepeat")}
                       placeholder="Repeated Password"
                       label="Repeat Password"
                       onBlur={() => setFieldTouched("passwordRepeat")}
                       caption={
                        touched.password && errors.password
                          ? errors.password
                          : undefined
                       }
                       status={touched.passwordRepeat && errors.passwordRepeat ? "danger" : "basic"}
                     />
                     <Button
                      style={styles.submitButtton}
                      onPress={() => handleSubmit()}
                     >
                        Reset Password
                     </Button>
                    </>
                );
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
    submitButtton: {
        marginTop: 20
    },
})