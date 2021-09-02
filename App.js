

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';

import { StyleSheet, Text, View, Image, ImageView, TouchableOpacity, TouchableHighlight } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator

      tabBarOptions={{
        //  activeTintColor: '#212121',
        //  inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#212121',

        inactiveBackgroundColor: '#212121',
        style: {
          backgroundColor: '#ed34db',
          paddingBottom: 3
        }
      }}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
      }}

      initialRouteName="Feed"
    // screenOptions={{
    //   tabBarActiveTintColor: '#fff',
    //   // tabBarBackground: () => (
    //     // <BlurView tint="light" intensity={100}  />
    //   // ),
    // }}

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{ headerShown: false }}
        options={{
          headerShown: false,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shorts"
        component={Notifications}
        options={{
          tabBarLabel: 'Shorts',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.icon} >
              <Image style={styles.shorts}
                source={require('./Assets//shorta.png')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={Profile}
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="account" color={color} size={size} />


            <View style={styles.icon} >
              <Image style={styles.add}
                source={require('./Assets/addyt.png')} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Subscriptions"
        component={Profile}
        options={{
          tabBarLabel: 'Subscriptions',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.icon} >
              <Image style={styles.subs2}
                source={require('./Assets//subs2.png')} />
            </View>
            ),
        }}
      />


      <Tab.Screen
        name="Library"
        component={Profile}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.icon} >
              <Image style={styles.libi}
                source={require('./Assets//libi.png')} />
            </View>          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    // height: 40,
    // width: 38,
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
    justifyContent: 'center'
  },
  cast: {
    height: 28,
    width: 40,
    alignSelf: 'center',
  },
  shorts: {
    height: 33,
    width: 25,
    alignSelf: 'center',
    marginTop: 3,
    paddingTop: 20,
  },
  subs2: {
    height: 37,
    width: 30,
    alignSelf: 'center',
    marginTop: 3,
    paddingTop: 20,
  },
  libi: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 3,
    paddingTop: 20,
  },
  add: {
    height: 36,
    width: 36,
    alignSelf: 'center',
    marginTop: 7,
  },

})
