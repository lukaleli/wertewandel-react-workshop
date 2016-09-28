import React, { Component, PropTypes } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: '#fe5000',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 15,
  },
});

class SpinnerOverlay extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    text: PropTypes.string,
  };

  render() {
    if (this.props.show) {
      return (
        <View style={styles.overlay}>
          <ActivityIndicator animating={true} size="large" color="white"/>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      )
    } else {
      return null;
    }
  }
}

export default SpinnerOverlay;
