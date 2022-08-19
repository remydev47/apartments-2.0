import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../components/Screen';

import { theme } from '../theme';
import { SignUpAndSignInButtons } from '../components/SignUpAndSignInButtons';

const AccountScreen = () => {
    const user = undefined
    const navigation = useNavigation

    return(
        <Screen>
            <ScrollView style={styles.container}>
                <View style={styles.defaultMarginHorizontal}>
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
                        <>
                          <Text style={styles.header} category={"h5"}>
                            Renting has never been Easier
                          </Text>
                          <SignUpAndSignInButtons />
                          <View style={styles.middleContainer}>
                            <Text category={"s1"} style={styles.subHeader}>
                                Are You a Property Manager or Owner?
                            </Text>
                            <Text style={styles.bodyText}>
                                Visit our Website to access full Suite of Rental & Property
                                management tools.Starts receiving application in minutes!
                            </Text>
                          </View>
                        </>
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
        
    },
    defaultMarginHorizontal:{
        marginHorizontal: 10
    },
    userName: {
         textAlign: "center",
         fontWeight: "600",
         marginBottom: 5,
         textTransform: "capitalize",
    },
    userEmail:{
        textAlign: "center",
        fontWeight: "500",
        marginBottom: 20
    },
    header:{
        textAlign: "center",
        marginHorizontal: 70,
        marginVertical: 25,
        fontWeight: "600"
    },
    middleContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 50,
        borderTopColor: theme["color-gray"],
        borderTopWidth: 2
    },
    subHeader: {
        textAlign: "center",
        paddingHorizontal: 20
    },
    bodyText:{
        marginTop: 10,
        textAlign: "center",
        marginHorizontal: 15
    }
})