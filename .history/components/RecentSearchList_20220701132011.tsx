import { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { getFormmatedText } from '../utils/getFormmatedText';

import { Location } from '../types/locationIQ';
import { RecentSearchButton } from './RecentSearchButton';

export const RecentSearchList = ({recentSearches, style}: {recentSearches?: Location[], style?: ViewStyle}) => {
    const [showMore, setShowMore] = useState(false);
    const getList = () => {
        if( !recentSearches || recentSearches.length === 0) return;

        if (recentSearches.length > 2 && !showMore)

    const ShowButton = ({text} : {text: string}) => {

    }

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
               ): null
             )}
             <ShowButton text="See More"/>
            </>
        );
        return (
          <>
           {recentSearches.map((i, index) => (
             <RecentSearchButton 
                key={i.display_name + index}
                name={getLocationText(i)}
                style={styles.recentSearchButton}
                onPress={() => handleRecentSearchuttonPress(i)}
             />
           ))}
           {recentSearches.length > 2 ? <ShowButton text="See Less"/> : null }
          </>
        )
    }

    return(
        <View style={styles.}>{getList()}</View>
    )
}
const styles = StyleSheet.create({
  recentSearchutton: {
    marginVertical: 5, 
  }
})