import { FlatList, StyleSheet } from "react-native";
import { Button, Text } from '@ui-kitten/components';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";

export const HeaderFilterButtons = () => {

    const filterButtons = [
        {
            iconName: "filter-variant",
            onPress: () => console.log("filter All")
        },
        {
            label: "Price",
            onPress: () => console.log("Price")
        },
        {
            label: "Beds & Baths",
            onPress: () => console.log("Beds and Bath")
        },
        {
            label: "Move-in-Date",
            onPress: () => console.log("Move in date")
        },
        {
            label: "Pets",
            onPress: () => console.log("pets")
        }
    ]

    return(
        <FlatList 
              data={filterButtons}
              style={{ marginVertical: 10 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                if(item.iconName) {
                    return (
                        <Button 
                        appearance={"ghost"}
                        style={[styles.button, {width: 48}]}
                        onPress={item.onPress}
                        accessoryLeft={
                         <MaterialCommunityIcons name={item.iconName as any } 
                            size={20} color={theme["color-primary-500"]} 
                         />
                        }
                         ></Button>  
                    )                 
                }
                return(
                    <Button 
                    appearance={"ghost"}
                    style={styles.button}
                    onPress={item.onPress}
                    
                     >
                        {item.label}
                     </Button>  
                )
              }}
              keyExtractor={(_, index) => index.toString()}
            />
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 30, 
        borderColor: "#d3d3d3" ,
        marginHorizontal: 3,
    }
})