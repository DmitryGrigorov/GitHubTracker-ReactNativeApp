import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import WebView from './WebView';

import Badge from './Badge';
import Separator from './Separator'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  static propTypes = {
    userInfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  };

  openPage(url){
    this.props.navigator.push({
      component: WebView,
      title: 'Web View',
      passProps: { url }
    });
  }

  render() {
    const { userInfo, repos } = this.props;
    var list = repos.map((repo, index) => {
      var desc = repo.description ? <Text style={styles.description}> { repo.description } </Text> : <View />;
      return (
        <View key={repo.id}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repo.html_url)}
              underlayColor='transparent'
            >
              <Text style={styles.name}> {repo.name} </Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      );
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>  
    );
  }
}
