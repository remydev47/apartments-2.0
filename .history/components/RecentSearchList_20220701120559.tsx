import { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import { Location } from '../types/locationIQ';
import { RecentSearchButton } from './RecentSearchButton';

export const RecentSearchList = ({recentSearches, style}: {recentSearches?: Location[], style?: ViewStyle}) => {
    const [showMore, setShowMore] = useState(false);
    const getList = () => {
        if( !recentSearches || recentSearches.length === 0) return;

        if (recentSearches.length > 2 && !showMore)
        return(
            <>
             {recentSearches.map((i, index) => 
               index < 2 ? (
                <RecentSearchButton 
                  key={i.display_name + index}
                  name={getFormmatedText(i)}
                  style={styles.recentSearchButton}
                  onPress={() => handleRecentSearchButtonPress(i)}
                />
               )
             )}
            </>
        )
    }

    return(
        <View style={styles.}>{getList()}</View>
    )
}
const styles = StyleSheet.create({

})