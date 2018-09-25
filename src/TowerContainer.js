import React from 'react';
import Tower from './Tower';

export default class TowerContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRadiant: true,
    };

    this.handleTowerPress = this.handleTowerPress.bind(this);
  }

  handleTowerPress() {
    console.log('click!');
    const { isRadiant } = this.state;
    this.setState({
      isRadiant: !isRadiant,
    });
  }

  render() {
    const { isRadiant } = this.state;
    return (
      <Tower isRadiant={isRadiant} onTowerPress={this.handleTowerPress} />
    );
  }
}
