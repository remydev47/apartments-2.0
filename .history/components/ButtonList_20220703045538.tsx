import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

import { theme } from "../theme";

export const ButtonList = ({
    data, 
    header,
    style, 
    borderTop, 
    marginTop
} : {
    data :{label: string; onPress:() => void}[]
    header?:string;
    style?:ViewStyle | ViewStyle;
    borderTop?: boolean;
    marginTop?: boolean;
}) => {

    const navigation = useNavigation();
     
    const getListHeaderComponent = () => {
        if(!header)return null

        return(
            <View style={[styles.headerContainer, { marginTop: marginTop ? 35 : 0 }]}>
                <Text style={styles.headerText}>{header}</Text>
            </View>
        )
    }

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

    const rentalManagementTools = [
        {
            label: "Add a Property",
            onPress: () => console.log("navigate to Add Property"),
        },
        {
            label: "Add apartment to Properties",
            onPress: () => console.log("navigate to MyProperty"),
        },
        {
            label: "View my Property",
            onPress: () => console.log("navigate to MyProperty"),
        }
    ]

    return(
        <View style={[styles.container, style, { borderTopWidth: borderTop ? 1 : 0 }]}>
           {getListHeaderComponent()}
           {data.map((item,index) => (
            <Pressable 
              key={item.label} 
              onPress={item.onPress}
              style={({ pressed }) => {
                let arr: any[] = [
                    styles.option,
                    {
                        backgroundColor: pressed ? theme["color-gray"] : "#f2f2f2",
                    },
                ]
                if (index !== data.length - 1 ) arr.push(styles.container)
                return arr
              }}
            >
                <Text>{item.label}</Text>
            </Pressable>
           ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: theme["color-gray"],
        borderBottomWidth: 1
    },
    headerContainer:{
        paddingVertical: 12,
        backgroundColor: "#f1f7e5",
        borderBottomWidth: 1,
        borderBottomColor: theme["color-gray"]
    },
    headerText: {
        fontWeight: "600",
        marginLeft: 18
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 18,
    }
})