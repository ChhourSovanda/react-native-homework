import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

import ListUsers from '../component/userComponent';

export default class ListUser extends Component {
  static navigationOptions = ({navigation}) => {
    return{
      headerLeft: (
        <View></View>
      ),
      headerTitle: (
        <View>
          <Text> List Users </Text>
        </View>
      ),
      headerRight: (
        <View></View>
      ),
      headerStyle: {
        backgroundColor: '#fff',
      }
    }
  }

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      page: 1,
      dataSource : [],
      limit: 10,
      refreshing: false,
      search: ''
    }
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    fetch(`https://randomuser.me/api/?inc=name,gender,email,picture,location,phone,cell&page=${this.state.page}&results=${this.state.limit}`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: this.state.page == 1 ? responseJson.results : this.state.dataSource.concat(responseJson.results),
      },() => {
        console.log(`https://randomuser.me/api/?inc=name,gender,email,picture,location,phone,cell&page=${this.state.page}&results=${this.state.limit}`)
      }
      
      );
      this.arrayholder = responseJson.results;
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  loadMore = () => {
    console.log('Load more')
    this.setState({
      page : this.state.page + 1
    }, () => {
      this.getUsers()
    })
  }
  
  onRefreshHandler = () => {
    console.log('Pull Refresh')
    this.setState({
      refreshing: true,
      page:1,
    },
      this.getUsers()
    );
  }

  renderFooter = () => {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <ActivityIndicator size='large' color='red' />
      </View>
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' color='red' />
        </View>
      )
    }
    
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (            
              <ListUsers item={item} onPress={()=> this.props.navigation.navigate('DetailUser', item)}/>
            )}
            keyExtractor={(item) => item.email}
            onEndReached={this.loadMore}
            onRefresh={this.onRefreshHandler}
            refreshing={this.state.isLoading}
            ListFooterComponent={this.renderFooter}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },
  TextInputStyleClass:{
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 7 ,
    backgroundColor : "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 10,
  }
});