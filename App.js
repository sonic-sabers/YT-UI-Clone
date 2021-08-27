import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from 'react-native';
import Home from './app/containers/Home';
import { createStore } from 'redux';
import mockMovies from './app/mockMovies';
import { Provider } from 'react-redux';


function addMovies(state, { movies }) {
  return movies.map(movie => ({
    Title: movie.Title,
    Poster: movie.Poster,
    imdbID: movie.imdbID,
  }))
}
function moviesReducer(state = mockMovies.Search, action) {
  // return state
  switch (action.type) {
    case 'Add_Movies':
      return 'addMovies'(state, action.payload)
    default:
      return state
  }
}

const store = createStore(moviesReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
