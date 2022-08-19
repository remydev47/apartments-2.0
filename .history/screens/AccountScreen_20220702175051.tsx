import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../components/Screen';

import { theme } from '../theme';
import { SignUpAndSignInButtons } from '../components/SignUpAndSignInButtons';

const AccountScreen = () => {
    return(
        <Screen>
            <Text>Jumba</Text>
        </Screen>
    )
}

export default AccountScreen;