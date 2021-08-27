import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieRow({ movie }) {
  return (
    <View
      style={styles.container}>
      <Image source={{ uri: movie.Poster }}
        style={styles.poster} />
      <Text style={styles.title} >{movie.Title}</Text>
      <View style={styles.icon} >
        <Icon name='heart-o' size={36} color='red' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    flex: 1,  
    alignItems: 'center',
    
  },
  poster: {
    height: 100,
    width: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    flex: 2,
    marginLeft:10,
  },
})
