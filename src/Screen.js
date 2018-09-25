import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import radiantImageSource from '../assets/radiantTower.png';
import direImageSource from '../assets/direTower.png';

export default function Screen(props) {
  const {
    isRadiant,
  } = props;

  let viewStyle;
  let imageStyle;
  let imageSource;
  if (isRadiant) {
    viewStyle = styles.radiant;
    imageStyle = styles.radiantImage;
    imageSource = radiantImageSource;
  } else {
    viwewStyle = styles.dire;
    imageStyle = styles.direImage;
    imageSource = direImageSource;
  }
  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={imageSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  radiant: {
    backgroundColor: 'lightblue',
  },
  dire: {
    backgroundColor: 'darkred',
  },
  radiantImage: {

  },
  direImage: {
    
  },
});
