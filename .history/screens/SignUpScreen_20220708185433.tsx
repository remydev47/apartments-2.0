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

export const SignUpScreen = () => {
    return(
        <KeyBoardAwareScrollView bounces={false}>
         <Screen style={styles.container}>
          <ModalHeader text="JumbaApartments" xShown={true} />
           <Text category={"h5"} style={styles.header}>
             SignUp
           </Text>
           <Formik
             initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: ""
             }}
             validationSchema={yup.object().shape({
                firstName:yup.string().email().required("Your First Name Is Required"),
                lastName:yup.string().email().required("Your Last Name Is Required"),
                email:yup.string().email().required("Your Email Is Required"),
                password:yup
                    .string()
                    .required("A Password Is Required")
                    .matches(
                        "/(?=)^&(9-378gfrnp00)",
                        "Your Pasword must have, 8 characters, 1 uppercase letter, 1 lowercase letter, 1 special character"
                    )
             })}
             onSubmit={(values) => {
                console.log("register", values)
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
                      <Input 
                       style={styles.input}
                       value={values.email}
                       onChangeText={handleChange("First Name")}
                       placeholder="Your First Name"
                       autoCapitalize="none"                     
                       autoComplete="name"
                       label="First Name"
                       onBlur={() => setFieldTouched("firstName")}
                       textContentType="givenName"
                       caption={
                        touched.firstName && errors.firstName 
                        ? errors.email
                        : undefined
                       }
                       status={touched.firstName && errors.firstName ? "danger" : "basic"}
                     />
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
})