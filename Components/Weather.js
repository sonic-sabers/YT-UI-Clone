import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header';
import { TextInput } from 'react-native-paper';

export default class Weather extends Component {

  // const [text, setText] = React.useState('');
  state = {
    text: ''
  };

  fetchCities(text) {
    console.log(text);

    this.setState({ text })

    // // fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    //   fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    //   //   .then(data => data.json())
    //   //   .then(data2 => {
    //   //     console.log(data2)
    //   //   })

    //   // fetch('http://autocomplete.wunderground.com/aq?query=' + text)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
      
  }
  render() {
    return (
      <View>
        <TextInput
          label='Name'
          value={this.state.text.name}
          onChangeText={text => this.fetchCities(text)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
