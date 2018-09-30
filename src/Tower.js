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
});

export default function Tower(props) {
  const {
    isRadiant,
    onCourrierPress,
    onTowerPress,
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
      <TouchableWithoutFeedback onPress={onCourrierPress}>
        <Image style={styles.courrier} source={courrierImageSource} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onTowerPress}>
        <Image style={imageStyle} source={imageSource} />
      </TouchableWithoutFeedback>
    </View>
  );
}
Tower.propTypes = {
  isRadiant: PropTypes.bool.isRequired,
  onCourrierPress: PropTypes.func.isRequired,
  onTowerPress: PropTypes.func.isRequired,
};
