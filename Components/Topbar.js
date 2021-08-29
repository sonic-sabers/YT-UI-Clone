import React from 'react'
import { StyleSheet, Text, View, Image, ImageView, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions';
import Explore from '../Components/Explore';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Topbar() {
  return (
    <View>
      <View style={styles.topbar}>
        <TouchableOpacity>
          <Image style={styles.youtube}
            // source={{ url: '../Assets/YouTube-Logo.png' }}   chromecast
            source={require('../Assets/ytlogo3.png')}
          />
        </TouchableOpacity>
        <View style={styles.sidebar}>

          <TouchableOpacity style={styles.icon} >
            <Image style={styles.cast}
              source={require('../Assets/cast1.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} >
            <Image style={styles.bell}
              source={require('../Assets/imagebell.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} >
            {/* <Icon name="search"  size={27} color="#fff" style='regular' /> */}
            <Image style={styles.ellipsis}
              source={require('../Assets/searchbg.png')} />
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.admin} /> */}
          <TouchableOpacity style={styles.icon} >
            <Image style={styles.admin}
              source={require('../Assets/admin.png')} />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    // backgroundColor: "#'hsla(129, 0%, 16%, 0.98)'",
    backgroundColor: "#282828",
    // flex:1, 
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  sidebar: {
    width: "50%",
    // backgroundColor: "#393939",
    // flex:1, 
    flexDirection: "row",
    justifyContent: 'space-around',
    margin: 10,
    alignItems: 'center',
  },
  youtube: {
    height: 40,
    // justifyContent: 'center',
    alignSelf: 'center',
    width: 120,
    margin: 3,
    marginTop: 10,
    marginLeft: 5,
    // resizeMode:'auto',
  },
  icon: {
    height: 40,
    width: 38,
    // backgroundColor: "#bbb",
    justifyContent: 'center',
    alignItems: 'center',
  },
  admin: {
    height: 38,
    width: 38,
    backgroundColor: "#bbb",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  ellipsis: {
    height: 30,
    alignSelf: 'center',
    width: 30,
    justifyContent:'center'
  },
  cast: {
    height: 35,
    width: 40,
    alignSelf: 'center',
  },
  bell: {
    height: 31,
    alignSelf: 'center',
    width: 26,
  },

})
