import React, {} from 'react'
import { FlatList, View, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WIDTH } from '../constants';

export const imageCarousel = ({ images }: { images: string[] }) => {
    return (
        <>
           <FlatList 
                  ref={(ref) => (flatListRef.current=ref)}
                  data={property.images}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToAlignment="center"
                  pagingEnabled
                  viewabilityConfig={viewConfig}
                  onViewableItemsChanged={onViewRef.current}
                  renderItem={({item, index }) => (
                    <Image
                    source={{
                     uri: item
                    }}
                    style={{
                     height: 225,
                     width: WIDTH,
                     borderTopLeftRadius:5,
                     borderTopRightRadius:5
                    }}
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