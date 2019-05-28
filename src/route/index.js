import React, { Component } from 'react';
import Login from '../screen/Login'
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

const LoginStack = createStackNavigator({
    Login : Login
},{
    headerMode: 'none',
})

const AppContainer = createAppContainer(LoginStack)

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}
