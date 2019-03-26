import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'intro1',
    title: 'Welcome to the\nCloset Sorter!',
    text: 'Swipe to continue',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'intro2',
    title: 'Grab one item\nof clothing...',
    backgroundColor: '#febe29',
  },
  {
    key: 'intro3',
    title: 'Got one?\n\nThen start sorting!',
    backgroundColor: '#22bcb5',
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showRealApp: false };
  }

  _renderItem = (item) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  }

  render() {
    if (this.state.showRealApp) {
      return (
        <View style={styles.container}>
          <Text>Real Apps</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
	margin: 10,
    marginBottom: 5,
  },
  slide: {
    flex: 1,
	backgroundColor: '#22bcb5',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
