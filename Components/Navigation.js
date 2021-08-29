import React from 'react'
import { StyleSheet, Text, View, Image, ImageView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions';
import Explore from '../Components/Explore';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-ionicons';

export default function Navigation() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis, consectetur hic quod maxime placeat expedita ipsa temporibus ipsum aliquam.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  height: 150,
  width: '100%',
  backgroundColor: "#bbb",
  // paddingBottom:500,
  }
})
