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
import { PasswordInput } from '../components/PasswordInput'

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
             })}
           >

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
    }
})