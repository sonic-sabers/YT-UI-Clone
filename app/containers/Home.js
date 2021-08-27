import React, { Component, setState } from 'react'
import { Text, StyleSheet, FlatList, View, Image } from 'react-native'
import mockMovies from '../mockMovies';
import { Provider } from 'react-redux';

import MovieRow from '../components/MovieRow';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      // movies: mockMovies.Search,
    }
  }
  async componentDidMount() {
    const response = await fetch('https://www.omdbapi.com/?apikey=89eefbd9&s=batman')
    const data = await response.json()
    this.setState({ movies: data.Search })
  }

  render() {
    const { movies } = this.state
    return (
      <View>
        {/* <View>
          <FlatList
            data={movies}
            renderItem={({ item: movie }) => (
              <View>
                <Text>{movie.Title}</Text>
              </View>
            )}
            keyExtractor={(movie) => movie.imdbID}
          />
        </View> */}


      
        <FlatList
          data={movies}
          renderItem={({ item: movie }) =>
            <MovieRow movie={movie} />
          }
          keyExtractor={(movie) => movie.imdbID}
        />



        {/* <View>
          {movies.map((movies) => (
            <View key={movies.imdbID}>
              <Text>{movies.Title}</Text>
            </View>
          ))}
        </View> */}
      </View>

    )
  }
}


{/* <View>

  {movies.map((movies) => (
    <View key={movies.imdbID}>
      <Text>{movies.Title}</Text>
    </View>
  ))}
</View> */}

const styles = StyleSheet.create({})
