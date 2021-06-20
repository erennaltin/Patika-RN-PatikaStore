import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import styles from './MarketElement.style';

const MarketElement = props => {
  return (
    <SafeAreaView style={styles.ElementContainer}>
      <View style={styles.ElementPicture} resizeMode="stretch">
        <Image
          style={styles.ElementPicture}
          source={{uri: props.element.imgURL}}
        />
      </View>
      <Text style={styles.ElementTitle}> {props.element.title} </Text>
      <Text style={styles.ElementPrice}> {props.element.price} </Text>
      <Text style={styles.ElementStock}>
        {props.element.inStock ? '' : 'STOKTA YOK'}
      </Text>
    </SafeAreaView>
  );
};

export default MarketElement;
