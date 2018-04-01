import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  handleInput = val => {
    this.setState({
      text: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = 'Type something'
          value={this.state.text}
          onChangeText={this.handleInput}
          />
          <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },



});
