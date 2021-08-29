import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, ActivityIndicator, RecyclerViewBackedScrollView } from 'react-native';
import MovieLoader from './components/MovieLoader';
import Home from './containers/Home';
import Loader from './containers/Loader';


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
            {/* <MovieLoader/> */}
        <Text>Hi hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis veritatis molestiae dolorem maiores ipsam sed velit alias, nihil ullam explicabo.</Text>
        {
          this.state.loader?
            <Loader/>
            :        
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
