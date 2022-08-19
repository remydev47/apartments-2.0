import { View, StyleSheet, ViewStyle } from 'react-native'
import { Button } from "@ui-kitten/components";

import { theme } from '../theme';

export const SignUpSignIn = ({style}: {style: ViewStyle}) => {
    <View style={style}>
        <Button 
          onPress={() => console.log("navigate to the sign Screen")}
        >
            SignIn
        </Button>
        <Button
          appearance={"ghost"}
          style={styles.signUpButton}
          onPress={() => console.log("navigate to the sign Screen")}>
            Create Account
        </Button>
    </View>
}

const styles = StyleSheet.create({

})