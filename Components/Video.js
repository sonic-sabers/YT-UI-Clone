import React from 'react'
import { StyleSheet, Text, View, Image, ImageView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions';
import Explore from '../Components/Explore';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-ionicons';

export default function Video() {
  return (
    <View style={{ backgroundColor: "#282828", marginVertical: 7 }}>
      <View>
        <TouchableOpacity>
          <Image style={styles.youtube}
            // source={require('../Assets/CBait.jpg')} />
    source={{ uri: 'https://i.ytimg.com/vi/xm1nQhr3DDk/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBfAKLnVbWzhSIOmPkfJGeVP6jI7Q'}} />
          <View style={{
            alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
            marginBottom: 15
          }}>
            <Text style={{ fontSize: 16, backgroundColor: "#191919", fontWeight: "bold", color: "white", paddingLeft: 3, paddingRight: 3, }}>17:13</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 14 }}>
          <TouchableOpacity>
            <Image style={styles.admin}
              // source={require('../Assets/Video1.png')} />
               source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLRuXVTZDKUN77xIOA8wuiu0TJ3loKLuN57IjYoL=s48-c-k-c0x00ffffff-no-rj'}} /> 
          </TouchableOpacity>
          <View style={{ width: '85%' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", paddingLeft: 10, marginTop: -5 }}>How Hubble Telescope works? JEE | NEET aspirants will love this :)</Text>
              <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop:3 }}>Nimbus Education- 5,249 views- 30 minutes ago </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.ellipsis}
                source={require('../Assets/ellipsis.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      
      
      <View>
        <TouchableOpacity>
          <Image style={styles.youtube}
            source={require('../Assets/shifuji1.png')} />
          <View style={{
            alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
            marginBottom: 15
          }}>
            <Text style={{ fontSize: 16, backgroundColor: "#191919", fontWeight: "bold", color: "white", paddingLeft: 3, paddingRight: 3, }}>5:45</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 14 }}>
          <TouchableOpacity>
            <Image style={styles.admin}
              source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLSn5ZkQLo8F0Eo6vBZhI-MM_Mv7wTN_lgLHHt6GnA=s48-c-k-c0x00ffffff-no-rj'}} />
          </TouchableOpacity>
          <View style={{ width: '85%' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", paddingLeft: 10, marginTop: -5 }}>Kisne Ki GDP Satyanas?{'\n'}Population Ka Kya?</Text>
              <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 3 }}>GRANDMASTER SHIFUJI'S... {'\n'}109,736  Views - 20 minutes ago </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.ellipsis}
                source={require('../Assets/ellipsis.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      
      
      <View>
        <TouchableOpacity>
          <Image style={styles.youtube}
            // source={require('../Assets/CBait.jpg')} />
              source={{ uri: 'https://i.ytimg.com/vi/Jh2cZKQZ1XA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAd1IbHb7qzBJHn5HZKBnM38Y6ZSA'}} />
          <View style={{
            alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
            marginBottom: 15
          }}>
            <Text style={{ fontSize: 16, backgroundColor: "#191919", fontWeight: "bold", color: "white", paddingLeft: 3, paddingRight: 3, }}>10:56</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', padding: 14 }}>
          <TouchableOpacity>
            <Image style={styles.admin}
              source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLTUdNBzBsQgteIjytTFVkBVWkAsiASo82XkUEEhTA=s48-c-k-c0x00ffffff-no-rj'}} />
              {/* source={{ uri: ''}} /> */}
              {/* source={require('../Assets/Video1.png')} /> */}
          </TouchableOpacity>
          <View style={{ width: '85%' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "white", paddingLeft: 10, marginTop: -5 }}>What if Every Second Lasted an Hour?</Text>
              <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 3 }}>The Slow Mo Guys{'\n'}1,744,881 views- 1 hour ago </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.ellipsis}
                source={require('../Assets/ellipsis.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({


  youtube: {
    height: 245,
    // justifyContent: 'center',
    alignSelf: 'center',
    width: "100%",
    // margin: 3,
    // marginTop: 10,
    marginLeft: 5,
    // resizeMode:'auto',
  },
  ellipsis: {
    height: 17,
    // justifyContent: 'center',
    alignSelf: 'center',
    width: 3,
    // margin: 3,
    // marginTop: 10,
    marginLeft: 5,
    // resizeMode:'auto',
  },
  admin: {
    height: 43,
    width: 43,
    backgroundColor: "#bbb",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
})
