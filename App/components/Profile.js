import React, { Component } from 'react';
import Separator from './Separator';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import Badge from './Badge.js';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default class Profile extends Component {
  getRowTitle(item) {
    var resultItem = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return resultItem[0] ? resultItem[0].toUpperCase() + resultItem.slice(1) : resultItem;
  }
  render() {
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email',
                    'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
            <Text style={styles.rowContent}> {userInfo[item]} </Text>
            <Separator/>
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {list}
      </ScrollView>
    )
  }
}