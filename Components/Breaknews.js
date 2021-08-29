import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class Breaknews extends Component {
  state = {
    names: [
      { 'name': 'Ben', 'id': 1, 'h1': "Farmers hold mahapanchayat", 'n1': 'police lathi-charge on farmers', 'channel': 'News18 India', 'views': '4 lakh', "time": '5:30', 'image': 'require("../Assets/CBait.jpg")' },
      { 'name': 'Ben', 'id': 2, 'h1': "CBI letter refutes claims, ", 'n1': 'CBI refutes Congress claims, ', 'channel': 'News18 India', 'views': '1 lakh', "time": '5:30' }, //require('../images/marker.png')
      { 'name': 'Ben', 'id': 3, 'h1': "Coronavirus India Update", 'n1': 'police lathi-charge on farmers', 'channel': 'Oneindia Hindi', 'views': '7 lakh', "time": '3:27' },
      { 'name': 'Ben', 'id': 4, 'h1': "Third wave of CoronaVirus", 'n1': 'Latest Corona Updates', 'channel': 'Aaj Tak', 'views': '32K ', "time": '0:30' },
      { 'name': 'Ben', 'id': 5, 'h1': "Gravities: ", 'n1': 'Americas COVID 19', 'channel': 'WION', 'views': '3.1 lakh', "time": '4:52' },

    ]
  }
  render() {
    return (
      <View style={{ backgroundColor: "#282828", marginVertical: 4, paddingLeft: 5 }}>
    
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', }}>
          <View>
            <Text style={{ fontSize: 25, color: "white", padding: 13, }}>Breaking News</Text>
          </View>
          <TouchableOpacity>
            <Image style={styles.ellipsis}
              source={require('../Assets/ellipsis.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >

          <View style={styles.Content}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image style={styles.youtube}
                  source={require('../Assets/News1.jpg')} />
              </TouchableOpacity>
              <View style={{
                alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
                marginBottom: 15
              }}>
                <Text style={{ fontSize: 16, backgroundColor: "black", fontWeight: "bold", color: "white", paddingLeft: 6, paddingRight: 3, }}>5:30</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 203 }}>
                  <Text style={{ fontSize: 20, color: "white", paddingLeft: 10, marginTop: 5 }}>Farmers hold mahapanchayat {'\n'}police lathi-charge on farmers</Text>
                  <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 5, marginBottom: 15 }}>News18 India{'\n'} 4 lakh Views -2 Days ago </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.ellipsis}
                    source={require('../Assets/ellipsis.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={styles.Content}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image style={styles.youtube}
                  source={require('../Assets/News2.jpg')} />
              </TouchableOpacity>
              <View style={{
                alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
                marginBottom: 15
              }}>
                <Text style={{ fontSize: 16, backgroundColor: "black", fontWeight: "bold", color: "white", paddingLeft: 6, paddingRight: 3, }}>9:56</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, color: "white", paddingLeft: 10, marginTop: 5 }}>CBI letter refutes claims {'\n'}CBI refutes Congress claims</Text>
                  <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 5, marginBottom: 15 }}>News 18 India{'\n'} 1.9M Views -1 Days ago </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.ellipsis}
                    source={require('../Assets/ellipsis.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={styles.Content}>
            <View style={styles.item}>
              <TouchableOpacity>
                <Image style={styles.youtube}
                  source={require('../Assets/News3.jpg')} />
              </TouchableOpacity>
              <View style={{
                alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
                marginBottom: 15
              }}>
                <Text style={{ fontSize: 16, backgroundColor: "black", fontWeight: "bold", color: "white", paddingLeft: 6, paddingRight: 3, }}>3:27</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, color: "white", paddingLeft: 10, marginTop: 5 }}>Coronavirus India Update {'\n'}vacinnation speed increases</Text>
                  <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 5, marginBottom: 15 }}>Oneindia Hindi{'\n'} 7 lakhViews -6 Days ago </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.ellipsis}
                    source={require('../Assets/ellipsis.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>


          <View style={styles.item}>
            <TouchableOpacity>
              <Image style={styles.youtube}
                source={require('../Assets/News4.jpg')} />
            </TouchableOpacity>
            <View style={{
              alignItems: 'flex-end', marginTop: -35, marginHorizontal: 10,
              marginBottom: 15
            }}>
              <Text style={{ fontSize: 16, backgroundColor: "black", fontWeight: "bold", color: "white", paddingLeft: 6, paddingRight: 3, }}>3:27</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, color: "white", paddingLeft: 10, marginTop: 5 }}>Coronavirus India Update {'\n'}vacinnation speed increases</Text>
                <Text style={{ fontSize: 17, color: "#bbb", paddingLeft: 10, marginTop: 5, marginBottom: 15 }}>Oneindia Hindi{'\n'} 7 lakhViews -6 Days ago </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.ellipsis}
                  source={require('../Assets/ellipsis.png')} />
              </TouchableOpacity>
            </View>
          </View>
          {/* </View> */}





        </ScrollView>
      </View>
    )
  }
}
export default Breaknews

const styles = StyleSheet.create({
  Content: {
    flexDirection: 'row',
    marginHorizontal: 3,

  },
  item: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 10,
    margin: 2,
    borderColor: '#121212',
    borderWidth: 0.6,
    backgroundColor: '#282828',
    width: 220
  },
  youtube: {
    height: 140,
    // justifyContent: 'center',
    alignSelf: 'center',
    width: 210,
    // margin: 3,
    // marginTop: 10,
    // marginLeft: 5,
    // resizeMode:'auto',
  },
  ellipsis: {
    height: 16,
    // justifyContent: 'center',
    // alignSelf: 'center',
    width: 4,
    // margin: 3,
    marginTop: 23,
    marginRight: 19,
    // resizeMode:'auto',
  },
})