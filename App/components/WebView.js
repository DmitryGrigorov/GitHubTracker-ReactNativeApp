import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F6F6EF',
      flexDirection: 'column'
  }
})

export default class WebExtends extends Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
}