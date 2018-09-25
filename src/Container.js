import React from 'react';
import Screen from './Screen';

export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      isRadiant: true,
    };

    this.handleTowerPress = this.handleTowerPress.bind(this);
  }

  handleTowerPress() {
    this.setState({
      isRadiant: !this.state.isRadiant,
    });
  }

  render() {
    return (
      <Screen isRadiant={this.state.isRadiant} />
    );
  }
}
