import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../components/Screen';

import { theme } from '../theme';
import { SignUpAndSignInButtons } from '../components/SignUpAndSignInButtons';

const AccountScreen = () => {
    const user = true
    const navigation = useNavigation

    return(
        <Screen>
            <ScrollView style={styles.container}>
                <View style={styles.defaltMarginHorizontal}>
                    <Text>
                        {user ?(
                        <>
                         <Text style={styles.userName} category={"h4"}>
                            Welcome, Users firstname
                         </Text>
                         <Text style={styles.userEmail} category={"h6"}>
                            user@example.com
                         </Text>
                        </> 
                        ):(
                        <></>
                        )}
                    </Text>
                </View>
            </ScrollView>
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    defaltMarginHorizontal:{
        marginHorizontal: 10
    },
    userName: {
        textAlign: "center",
        fontWeight: "600",
        marginBottom: 5,
        textTransform: "capitalize"
    },
    userEmail:{
        textAlign: "center",
        fontWeight: "500",
        marginBottom: 20
    }
})