import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, ActivityIndicator, RecyclerViewBackedScrollView } from 'react-native';
import Home from './app/containers/Home';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loader: true
    }
  } componentDidMount() {
    setTimeout(() => {
      this.setState({loader:false})
    },3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Hi hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis veritatis molestiae dolorem maiores ipsam sed velit alias, nihil ullam explicabo.</Text>
        {
          this.state.loader?
            <ActivityIndicator color size={100}/>  :        
          <Home />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
