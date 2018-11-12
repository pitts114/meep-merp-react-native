import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import radiantImageSource from '../assets/radiantTower.png';
import direImageSource from '../assets/direTower.png';
import courrierImageSource from '../assets/courrier.png';

const styles = StyleSheet.create({
  radiant: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dire: {
    backgroundColor: 'darkred',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  courrier: {
    position: 'absolute',
    top: 50,
    right: 25,
    height: 50,
    width: 50,
  },
  tower: {
    width: 250,
    height: 250,
  },
  towerPressed: {
    width: 225,
    height: 225,
  },
});

export default function Tower(props) {
  const {
    isRadiant,
    onCourrierPress,
    isPressed,
    onPressIn,
    onPressOut,
  } = props;

  let viewStyle;
  let imageSource;
  const imageStyle = isPressed ? styles.towerPressed : styles.tower;

  if (isRadiant) {
    viewStyle = styles.radiant;
    imageSource = radiantImageSource;
  } else {
    viewStyle = styles.dire;
    imageSource = direImageSource;
  }
  return (
    <View style={viewStyle}>
      <TouchableWithoutFeedback onPress={onCourrierPress}>
        <Image style={styles.courrier} source={courrierImageSource} fadeDuration={0} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
        <Image style={imageStyle} source={imageSource} fadeDuration={0} />
      </TouchableWithoutFeedback>
    </View>
  );
}
Tower.propTypes = {
  isRadiant: PropTypes.bool.isRequired,
  onCourrierPress: PropTypes.func.isRequired,
  isPressed: PropTypes.bool.isRequired,
  onPressIn: PropTypes.func.isRequired,
  onPressOut: PropTypes.func.isRequired,
};
