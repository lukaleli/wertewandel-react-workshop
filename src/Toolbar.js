import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, StyleSheet, Image, Text, Dimensions } from 'react-native';
import BackIcon from './res/BackIcon.png';

let { width } = Dimensions.get('window');
const size = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: size,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 20,
    textAlignVertical: 'center',
    color: 'white',
    marginLeft: 10,
  },
  button: {
    height: size,
    width: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

class Toolbar extends Component {
  static propTypes = {
    hasBackButton: PropTypes.bool,
    title: PropTypes.string,
    onBackButtonClick: PropTypes.func,
  };

  static defaultProps = {
    hasBackButton: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.hasBackButton && <TouchableHighlight style={styles.button} onPress={this.props.onBackButtonClick}>
          <Image style={styles.buttonImage} source={BackIcon} />
        </TouchableHighlight>}
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

export default Toolbar;
