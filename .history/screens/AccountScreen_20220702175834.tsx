import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../components/Screen';

import { theme } from '../theme';
import { SignUpAndSignInButtons } from '../components/SignUpAndSignInButtons';

export const AccountScreen = () => {
    const user = undefined
    return(
        <Screen>
            <ScrollView style={styles.container}>
                <View style={styles.defaltMarginHorizontal}>
                    <Text>help</Text>
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    defaltMarginHorizontal:{
        marginHorizontal: 10
    }
})