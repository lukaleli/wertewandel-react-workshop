import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Dimensions, Navigator } from 'react-native';

import Toolbar from './Toolbar';

import BackgroundImage from './res/HomeScreen.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  toolbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 60,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

class ScreenWrapper extends Component {
  static PropTypes = {
    hasToolbar: PropTypes.bool.isRequired,
    hasBackButton: PropTypes.bool,
    title: PropTypes.string,
    navigator: PropTypes.instanceOf(Navigator).isRequired,
  };

  static defaultProps = {
    hasBackButton: true,
    toolbarTitle: '',
  };

  constructor(props) {
    super(props);
    this.onIconClicked = this.onIconClicked.bind(this);
  }

  onIconClicked() {
    if (this.props.navigator && this.props.navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    this.props.navigator.pop();
    return true;
  }

  render() {
    return (
      <Image source={BackgroundImage}
             style={[styles.container, this.props.style, {paddingTop: this.props.hasToolbar ? 60 : 0}]}>
        {this.props.hasToolbar && <Toolbar style={styles.toolbar}
                                           hasBackButton={this.props.hasBackButton}
                                           title={this.props.toolbarTitle}
                                           onBackButtonClick={this.onIconClicked} />}
        {this.props.children}
      </Image>
    );
  }
}

export default ScreenWrapper;
