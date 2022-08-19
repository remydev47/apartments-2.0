import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../components/Screen';

import { theme } from '../theme';
import { SignUpAndSignInButtons } from '../components/SignUpAndSignInButtons';
import { ButtonList } from '../components/ButtonList';

const AccountScreen = () => {
    const user = undefined
    const navigation = useNavigation()

    const firstSignedOutButtons = [
        {
            label: "Add a Property",
            onPress: () => console.log("navigate to Add Property"),
        },
        {
            label: "View my Property",
            onPress: () => console.log("navigate to view my Properties"),
        },
    ]

    const supportButtons =[
        {
            label: "Help Center",
            onPress: () => console.log("navigate to Help Center"),
        },
        {
            label: "Terms and Conditions",
            onPress: () => console.log("navigate to terms and Conditions"),
        },
    ]

    const rentingButtons = [
        {
            label: "Favourite Property",
            onPress: () => navigation.navigate("Root", {screen: "Saved"}),
        },
        {
            label: "Rental Application",
            onPress: () => console.log("navigate to Property Application"),
        },
        {
            label: "My Residences",
            onPress: () => console.log("navigate to Residences"),
        },
        {
            label: "Rent Payment",
            onPress: () => console.log("navigate to rental Payment"),
        }
    ]

    const accountButtons = [
        {
            label: "Account Settings",
            onPress: () => console.log("navigate to Account Settings"),
        },
        {
            label: "Billing History",
            onPress: () => console.log("navigate to Billing History"),
        },
        {
            label: "Banks, Cards and M-pesa",
            onPress: () => console.log("navigate to Banks, Cards and M-pesa"),
        }
    ]

    const rentalManagementButtons = [
        {
            label: "Add a Poperty",
            onPress: () => console.log("navigate to AddProperty"),
        },
        {
            label: "Add Apartment to Property",
            onPress: () => console.log("navigate to MyProperty"),
        },
    ]

    return(
        <Screen>
            <ScrollView style={styles.container} > 
                <View style={styles.defaultMarginHorizontal}>
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
                </View>
                {user ? 
                  <>
                    <ButtonList data={rentingButtons} header={"Renting Made Easy"} />
                    <ButtonList data={accountButtons} header={"My Account"}/>
                    <ButtonList data={rentalManagementButtons} header={"Rental Manager Tools"}/>
                    <ButtonList data={supportButtons} header={"Support"}/>
                    <View style={[styles.specialMarginVertical, styles.defaultMarginHorizontal]}>
                        <Button
                         appearance={"ghost"}
                         style={styles.button}
                         onPress={() => console.log("log users Out")}
                        >
                            Sign-Out
                        </Button>
                    </View>
                  </>
                 :
                  <></>
                }
             </ScrollView> 
        </Screen>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    },
    specialMarginVertical: {
        marginTop: 30,
        marginBottom:20
    },
    button: {
        marginBottom: 15,
        borderColor: theme["color-primary-500"]
    }
})