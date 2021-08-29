import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Explore extends Component {
   state = {
      names: [
         { 'name': 'React', 'id': 1 },
         { 'name': 'React Native', 'id': 2 },
         { 'name': 'Computers', 'id': 3 },
         { 'name': 'Indian Army', 'id': 4 },
         { 'name': 'Navy', 'id': 5 },
         { 'name': 'Marvel Cinematic Universe', 'id': 6 },
         { 'name': 'Comedies', 'id': 7 },
         { 'name': 'Thrillers', 'id': 8 },
         { 'name': 'Tech', 'id': 9 },

      ]
   }
   render() {
      return (
         <View style={{ backgroundColor: "#282828", marginTop: 3 }}>
            <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               showsVerticalScrollIndicator={false}
               style={{
                  margin: 10,
               }}>

               <TouchableOpacity style={styles.Explore}>
                  <View style={{ flexDirection: 'row' }}>
                     <Icon name="compass" size={27} color="#fff" />
                     <Text style={{ color: 'white',marginLeft:9, fontSize: 20, fontWeight: 'bold' }}>Explore</Text>
                  </View>
               </TouchableOpacity>
               <View style={{ height: 40, alignSelf: 'center', width: 1.5, marginHorizontal: 10, backgroundColor: '#444' }} />

               <TouchableOpacity style={styles.All}>
                  <Text style={{ color: '#555555', fontSize: 21, fontWeight: 'bold' }}>All</Text>
               </TouchableOpacity>
               {
                  this.state.names.map((item, index) => (
                     <TouchableOpacity key={item.id} style={styles.item}>
                        <Text style={{ color: '#fff', fontSize: 21 }}>{item.name}</Text>
                     </TouchableOpacity>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default Explore

const styles = StyleSheet.create({
   item: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      // height: 47,
      margin: 2,
      // borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#555555',
      borderRadius: 30,
      paddingVertical:3,
   },
   All: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      // height: 47,
      margin: 2,
      // borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 30,
   },
   Explore: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      // height: 47,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#444444',
      // borderRadius: 30,
      flexDirection: 'row',
   },
})