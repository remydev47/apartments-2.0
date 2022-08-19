import { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button } from '@ui-kitten/components';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { getFormmatedText } from '../utils/getFormmatedText';

import { Location } from '../types/locationIQ';
import { RecentSearchButton } from './RecentSearchButton';

export const RecentSearchList = ({recentSearches, style}: {recentSearches?: Location[], style?: ViewStyle}) => {
    const [showMore, setShowMore] = useState(false);

    const navigation = useNavigation()

    const handleButtonPress = () => setShowMore(!showMore)

    const ShowButton = ({text} : {text: string}) => {
      return(
        <Button
          appearance={"ghost"}
          status="info"
          style={styles.showbutton}
          onPress={handleButtonPress}
        >
          {text}
        </Button>
      )
    }

    const handleRecentSearchButtonPress = (location: Location) => {
      navigation.navigate("Root", {
        screen: "Search",
        params: {
          location: getFormmatedText(location),
          lon: location.lon,
          lat: location.lat,
          boundingBox: location.boundingbox
        },
    })
    }

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
                name={getFormmatedText(i)}
                style={styles.recentSearchButton}
                onPress={() => handleRecentSearchButtonPress(i)}
             />
           ))}
           {recentSearches.length > 2 ? <ShowButton text="See Less"/> : null }
          </>
        )
    }

    return(
        <View style={style}>{getList()}</View>
    )
}
const styles = StyleSheet.create({
  recentSearchButton: {
    marginVertical: 5, 
  },
  showbutton:{
    alignSelf: "flex-start",
  },
})