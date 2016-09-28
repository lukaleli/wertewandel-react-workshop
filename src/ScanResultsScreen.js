import React, { Component, PropTypes } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import ScreenWrapper from './ScreenWrapper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe5000',
  },
  result: {
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 20,
  },
});

class ScanResultsScreen extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    let results = this.props.result.ParsedResults
      .map((result, i) => <Text key={i} style={styles.result}>{result.ParsedText}</Text>);
    return (
      <ScreenWrapper hasToolbar={true} toolbarTitle="Scan results" navigator={this.props.navigator}>
        <ScrollView showsVerticalScrollIndicator={true}>
          {results}
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

export default ScanResultsScreen;
