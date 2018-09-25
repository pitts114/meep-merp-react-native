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
    const { isRadiant } = this.state;
    this.setState({
      isRadiant: !isRadiant,
    });
  }

  render() {
    const { isRadiant } = this.state;
    return (
      <Screen isRadiant={isRadiant} />
    );
  }
}
