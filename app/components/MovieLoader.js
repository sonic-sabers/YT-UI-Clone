import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieLoader() {
  return (
    <View
      style={styles.container}>
      <View style={styles.poster} />
      <View style={styles.title} />
      {/* <Text style={styles.title} >{movie.Title}</Text> */}
      <View style={styles.icon} >
        {/* <Icon name='heart-o' size={36} color='red' /> */}
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
    height:100,
    width:40,
    backgroundColor:"#eee",
    
    
  },
  poster: {
    height: 100,
    width: 70,
    resizeMode: 'contain',
    backgroundColor:"#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    flex: 2,
    marginLeft:10,
    backgroundColor:"#eee",
    // width:10,
    height:30,
  },
})
