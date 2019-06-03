import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class UserProfileView extends Component {
  static navigationOptions = ({navigation}) => {
    return{
      headerTitle: (
        <View>
          <Text> Detail User </Text>
        </View>
      ),
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: this.props.navigation.state.params.picture.large}}/>
                <Text style={styles.name}>{this.props.navigation.state.params.name.title}. {this.props.navigation.state.params.name.first} {this.props.navigation.state.params.name.last}</Text>
                <Text style={styles.userInfo}>{this.props.navigation.state.params.email}</Text>
                <Text style={[styles.userInfo,{textTransform: 'capitalize'}]}>{this.props.navigation.state.params.location.city} </Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={{ color: '#fff', paddingBottom: 20, }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text style={{ color: '#fff', paddingTop: 10, }}>Phone : {this.props.navigation.state.params.phone}</Text>
            <Text style={{ color: '#fff', paddingTop: 10, }}>Cell : {this.props.navigation.state.params.cell}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    textTransform: 'capitalize',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    padding: 25,
  },
  
});