import React from 'react';
import Expo from 'expo';
import Tower from './Tower';
import magicImmuneSound from '../assets/magic_immune.mp3';

const soundObj = new Expo.Audio.Sound();
let soundIsReady = false;


soundObj.loadAsync(magicImmuneSound).then(() => { soundIsReady = true; });

async function playSound() {
  if (!soundIsReady) return;
  await soundObj.setPositionAsync(0);
  await soundObj.playAsync();
}

export default class TowerContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRadiant: true,
      towerIsDepressed: false,
    };

    this.handleCourrierPress = this.handleCourrierPress.bind(this);
    this.handleTowerPressIn = this.handleTowerPressIn.bind(this);
    this.handleTowerPressOut = this.handleTowerPressOut.bind(this);
  }

  handleCourrierPress() {
    const { isRadiant } = this.state;
    this.setState({
      isRadiant: !isRadiant,
    });
  }

  handleTowerPressIn() {
    this.setState({
      towerIsDepressed: true,
    });
  }

  handleTowerPressOut() {
    this.setState({
      towerIsDepressed: false,
    });
    playSound();
  }

  render() {
    const { isRadiant, towerIsDepressed } = this.state;
    return (
      <Tower
        isRadiant={isRadiant}
        towerIsDepressed={towerIsDepressed}
        onCourrierPress={this.handleCourrierPress}
        onTowerPressIn={this.handleTowerPressIn}
        onTowerPressOut={this.handleTowerPressOut}
      />
    );
  }
}
