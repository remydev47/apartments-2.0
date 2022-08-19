import { styled } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
    return(
      <View style={styles.container}>
        <MapView style={{  height: "100%", width: "100%"}} />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden"
    },
    
})