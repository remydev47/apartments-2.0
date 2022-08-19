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
                     <Input 
                       style={styles.input}
                       value={values.email}
                       onChangeText={handleChange("Last Name")}
                       placeholder="Your Last Name"
                       autoCapitalize="none"                     
                       autoComplete="name"
                       label="Last Name"
                       onBlur={() => setFieldTouched("lastName")}
                       textContentType="familyName"
                       caption={
                        touched.lastName && errors.lastName 
                        ? errors.email
                        : undefined
                       }
                       status={touched.lastName && errors.lastName ? "danger" : "basic"}
                     />
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
                     <Button
                      style={styles.signUpButtton}
                      onPress={() => handleSubmit()}
                     >
                        SignUp
                     </Button>
                     <OrDivider style={styles.orContainer} />
                     <GoogleButton 
                       text="SignUp With Google"
                       style={styles.button}
                       onPress={() => console.log("google Signup")}
                     />
                     <FaceBookButton
                      text="SignUp With FaceBook"
                      style={styles.button}
                      onPress={() => console.log("facebook SignUp")}
                    />
                    <AppleButton
                      type="signUp"
                      onPress={() => console.log("apple SignUp")}
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
    },
    signUpButtton: {
        marginTop: 20
    },
    orContainer: {
        marginVertical: 30
    },
    button:{
        marginBottom: 10,
    }
})