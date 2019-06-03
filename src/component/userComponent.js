import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ListUsers = (props) => {
  return (
    <TouchableOpacity style={ styles.container } onPress = { props.onPress }>
      <View style={ styles.thumb }>
        <Image source={{ uri: props.item.picture.thumbnail }} style={ styles.profile }/>
      </View>
      <View style={ styles.userInfo }>
        <Text>
          <Text style={ styles.textCapitalize }>Name : {props.item.name.title}. {props.item.name.first} {props.item.name.last}</Text>
        </Text>
        <Text>Email : {props.item.email}</Text>
        <Text style={ styles.textCapitalize }>Gender : {props.item.gender}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListUsers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dfe6e9'
  },
  thumb: {
    flex: 1 , padding: 10, alignItems: 'center'
  },
  profile: {
    width: 55, height: 55, resizeMode: 'cover', borderRadius: 55/2, borderWidth: 1, borderColor: 'red' 
  },
  userInfo: {
    flex: 4, padding: 10
  },
  textCapitalize: {
    textTransform: 'capitalize'
  }
});

