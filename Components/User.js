import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User(props) {
  const {data}= props
  return (
    <View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dicta.</Text>
    <Text>{data.name}</Text>
    <Text>{data.margin}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
