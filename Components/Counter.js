

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';


class Counter extends Component {
  state = { count: 0 };
  decrementCount() {
    let { count } = this.state;
    count--;
    this.setState({
      count
    })
  }
  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }
  render() {
    const { count } = this.state;
    return (
      <View styles={styles.container}>
        <Text
          style={{ alignSelf:'flex-end' }}
        >{count}</Text>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
          style={{ padding: 200 }}

        />
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
          style={{ margin: 20 }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Counter;