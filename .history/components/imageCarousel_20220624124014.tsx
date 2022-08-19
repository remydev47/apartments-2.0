import React,  { useState, useRef } from 'react'
import { FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WIDTH } from '../constants';

export const imageCarousel = ({ images }: { images: string[] }) => {

    const flatListRef = useRef<FlatList | null>(null)
    const viewConfig = {viewAreaCoveragePercentThreshold: 95}
    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef(({changed} : {changed: any}) => {
      if(changed[0]. isViewable) {
        setActiveIndex(changed[0].index)
      }
    });

    const hundlePressLeft = () => {
        if ( activeIndex === images.length - 1 )
         return flatListRef.current?.scrollToIndex({
          animated: false,
          index: 0,
         });
         flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
         });
      }
    
      const hundlePressRight = () => {
        if ( activeIndex === 0)
         return flatListRef.current?.scrollToIndex({
          animated: false,
          index:  images.length - 1,
         });
         flatListRef.current?.scrollToIndex({
          index: activeIndex - 1,
         });
      }

    return (
        <>
           <FlatList 
                  ref={(ref) => (flatListRef.current=ref)}
                  data={images}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToAlignment="center"
                  pagingEnabled
                  viewabilityConfig={viewConfig}
                  onViewableItemsChanged={onViewRef.current}
                  renderItem={({ item }) => (
                    <Image
                    source={{
                     uri: item
                    }}
                    style={styles.image}
                 />
                  )}
                  keyExtractor={(property) => property}
                />
                <Pressable
                  style={{ position: 'absolute', top: 95, left: 5}}
                  onPress={hundlePressLeft}
                >
                <MaterialCommunityIcons name="chevron-left" size={45} color="#fff" />
                </Pressable>
                <Pressable
                  style={{ position: 'absolute', top: 95, right:5}}
                  onPress={hundlePressRight}
                >
                <MaterialCommunityIcons name="chevron-right" size={45} color="#fff" />
                </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 225,
        width: WIDTH,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    }
})