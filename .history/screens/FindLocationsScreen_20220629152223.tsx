import { Platform } from 'react-native';
import { ModalHeader } from '../components/ModalHeader';
import { Screen } from '../components/Screen';

export const FindLocationsScreen = () => {
    return(
        <Screen>
            {Platform.OS === "ios" ? <ModalHeader />: null }
        </Screen>
    )
}

