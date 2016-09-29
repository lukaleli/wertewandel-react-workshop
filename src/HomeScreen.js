import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SpinnerOverlay from './SpinnerOverlay';
import OcrApi from './OcrApi';
import ScreenWrapper from './ScreenWrapper';
import { SCREENS } from './Navigation';

// Assets
import LogoImage from './res/Logo.png';
import CameraIcon from './res/CameraIcon.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  welcomeText: {
    color: '#ffffff',
    padding: 20,
  },
  logo: {
    width,
    marginTop: 50,
    marginBottom: 50,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 50,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 15,
  },
});

const imagePickerOptions = {
  title: 'Select or take photo...',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take photo',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
  mediaType: 'photo',
  quality: 1,
  noData: true,
  maxHeight: 1000,
};

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.onCameraButtonPress = this.onCameraButtonPress.bind(this);
    this.state = {
      showSpinner: false,
    };
  }

  onCameraButtonPress() {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      if (!response.didCancel) {
        this.setState({ showSpinner: true });
      }
      OcrApi.getOcrResults(response.uri)
        .then((response) => {
          response.json().then((response) => {
            this.setState({ showSpinner: false });
            this.props.navigator.push({ id: SCREENS.RESULTS, props: { result: response } });
          });

        })
        .catch(console.log);
    });
  }

  render() {
    return (
      <ScreenWrapper hasToolbar={false} navigator={this.props.navigator} style={{alignItems: 'center'}}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome on the N3xtcoder React Native workshop. The purpose of this workshop is
          to teach you how to capture a photo and scan it with OCR technology via remote http API.</Text>
        <TouchableHighlight onPress={this.onCameraButtonPress} style={styles.button} underlayColor="rgba(0, 0, 0, 0)">
          <Image source={CameraIcon} style={styles.buttonImage}/>
        </TouchableHighlight>
        <Text style={styles.buttonText}>Tap on the button to capture the photo</Text>
        <SpinnerOverlay text="Working ..." show={this.state.showSpinner} />
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;
