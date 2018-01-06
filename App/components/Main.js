import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import React, { Component } from 'react';
import {API} from '../utils/api';

import Dashboard from './Dashboard';

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});


class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.nativeEvent.text
    })
  }

  handleSubmit = () => {
    this.setState({
      isLoading: true
    });
    console.log('Submit', this.state.username);
    API.getBio(this.state.username).then(res => {
        if (res.message === 'Not Found') {
          this.setState({
            isLoading: false,
            error: 'User not found'
          });
        } else {
          this.props.navigator.push({
            title: res.name || 'Select in options',
            component: Dashboard,
            passProps: { userInfo: res }
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
  }

  render () {
    const showErr = this.state.error
      ? <Text>{this.state.error}</Text>
      : <View></View>
    ;
    return (
      <View
        style={styles.mainContainer}
      >
        <Text style={styles.title}>
          Search for GitHub User
        </Text>
        <TextInput 
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        {showErr}
      </View>
    );
  }
};


export default Main;