import React from 'react';
import Expo from 'expo';
import Tower from './Tower';
import magicImmuneSound from '../assets/magic_immune.mp3';

const soundObj = new Expo.Audio.Sound();
let soundIsReady = false;


soundObj.loadAsync(magicImmuneSound).then(() => { soundIsReady = true; });

async function play() {
  if (!soundIsReady) return;
  await soundObj.setPositionAsync(0);
  await soundObj.playAsync();
}

export default class TowerContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRadiant: true,
    };

    this.handleCourrierPress = this.handleCourrierPress.bind(this);
  }

  handleCourrierPress() {
    const { isRadiant } = this.state;
    this.setState({
      isRadiant: !isRadiant,
    });
  }

  render() {
    const { isRadiant } = this.state;
    return (
      <Tower isRadiant={isRadiant} onCourrierPress={this.handleCourrierPress} onTowerPress={play} />
    );
  }
}
