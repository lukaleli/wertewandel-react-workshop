import React, { Component } from 'react';
import { Navigator, BackAndroid } from 'react-native';
import ScanResultsScreen from './ScanResultsScreen';
import HomeScreen from './HomeScreen';

export const SCREENS = {
  HOME: 'home',
  RESULTS: 'results',
};

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    _navigator.pop();
    return true;
  }
);

class Root extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(route, navigator) {
    _navigator = navigator;
    const config = {
      navigator,
    };

    switch (route.id) {
      case SCREENS.HOME:
        return (<HomeScreen {...config} {...route.props} />);
      case SCREENS.RESULTS:
        return (<ScanResultsScreen {...config} {...route.props} />);
    }
  }

  render() {
    return (<Navigator initialRoute={{id: SCREENS.HOME}} renderScene={this.navigate}/>);
  }
}

export default Root;
