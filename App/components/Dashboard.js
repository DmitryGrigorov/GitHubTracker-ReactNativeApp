import React, { Component } from 'react';
import Profile from './Profile'

import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  button: {

  }
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  makeBackground(btn) {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC'
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE' 
    } else {
      obj.backgroundColor = '#758BF4' 
    }

    return(obj);
  }

  goToProfile = () => {
    console.log('Go to Profile', this.props.userInfo)
    this.props.navigator.push({
      name: 'Profile',
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos = () => {
    console.log('Go to Repos')
  }

  goToNotes = () => {
    console.log('Go to Notes')
  }
  
  render() {
    const { userInfo = {} } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: userInfo.avatar_url}}
        />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes}
          underlayColor='#88D4F5'
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>  
    );
  }
}