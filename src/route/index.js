import React, { Component } from 'react';
import Login from '../screen/Login';
import ListUser from '../screen/ListUser';
import DetailUser from '../screen/DetailUser';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

const LoginStack = createStackNavigator({
    Login : Login,
    
},{
    headerMode: 'none',
})

const ListUserStack = createStackNavigator({
  ListUser : ListUser,
  DetailUser : DetailUser
})


const AppContainer = createAppContainer(ListUserStack)

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
