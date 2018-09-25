import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import radiantImageSource from '../assets/radiantTower.png';
import direImageSource from '../assets/direTower.png';

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
    viewStyle = styles.dire;
    imageStyle = styles.direImage;
    imageSource = direImageSource;
  }
  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={imageSource} />
    </View>
  );
}
Screen.propTypes = {
  isRadiant: PropTypes.bool.isRequired,
};
