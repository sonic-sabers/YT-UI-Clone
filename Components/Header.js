import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Header() {
  return (
    <View>
      <Appbar.Header >
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Weather App" subtitle="Select City" 
        style={{ alignItems:'center' }}/>
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({})
