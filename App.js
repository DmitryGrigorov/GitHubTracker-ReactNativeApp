/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Main from './App/components/Main.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component<{}> {
  render() {

    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          component: Main,
          title:"Github NoteTaker",
          backButtonTitle: 'Back'
        }}
      />
    );
  }
}
