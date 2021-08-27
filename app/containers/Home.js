import React, { Component, setState } from 'react'
import { Text, StyleSheet, FlatList, View, Image } from 'react-native'
import mockMovies from '../mockMovies';
import { connect } from 'react-redux';
import MovieRow from '../components/MovieRow';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      // movies: mockMovies.Search,
    }
  }
  async componentDidMount() {

    const { addMovies } = this.props
    const response = await fetch('https://www.omdbapi.com/?apikey=89eefbd9&s=batman')
    const data = await response.json()
    // this.setState({ movies: data.Search })
    addMovies(data.Search)
  }

  render() {
    // const { movies } = this.state
    const { movies } = this.props
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

function mapStateToProps(state) {
  return {
    movies: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovies: (movies) => dispatch({
      type: 'Add_Movies',
      payload: { movies }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
