import { View, StyleSheet, ViewStyle } from 'react-native'
import { Button } from "@ui-kitten/components";
import { useNavigation } from '@react-navigation/native';

import { theme } from '../theme';

export const SignUpAndSignInButtons = ({style}: {style?: ViewStyle}) => {

  const navigation = useNavigation();

    return(
        <View style={style}>
         <Button 
           onPress={() => navigation.navigate("SignIn")}
          >
            SignIn
         </Button>
         <Button
           appearance={"ghost"}
           style={styles.signInButton}
          onPress={() => navigation.navigate("SignUp")}
          >
            Create Account
         </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    signInButton:{
        marginVertical: 10,
        borderColor: theme["color-primary-500"]
    }
})