import React, { Component } from 'react';
import Login from '../screen/Login'
import {createAppContainer, createStackNavigator} from 'react-navigation';

const LoginStack = createStackNavigator({
    Login : Login
},{
    headerMode: 'none',
})

const AppContainer = createAppContainer(LoginStack)

export default class Root extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
