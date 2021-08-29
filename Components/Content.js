import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Topbar from '../Components/Topbar';
import Explore from '../Components/Explore';
import Video from '../Components/Video';
import BNew from '../Components/BNew';
import Breaknews from '../Components/Breaknews';
import Navigation from '../Components/Navigation';

export default function Content() {
  return (
    <View>
      <View>
        {/* <ScrollView > */}
        <ScrollView style={{ marginBottom: 300 }}>
          <Topbar />
          <Explore />
          <Video />
          {/* <BNew/> */}
          <Breaknews />
          <Video />
        </ScrollView>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})
