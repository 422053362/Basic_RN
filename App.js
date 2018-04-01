import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

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

  alertInput = () => {
    Alert.alert('Your message', this.state.text)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.typeInput}
            placeholder = 'Type something'
            value={this.state.text}
            onChangeText={this.handleInput}
            />
          <Button
            title='Add'
            style={styles.inputButton}
            onPress={this.alertInput}
          />
      </View>
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

  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  typeInput: {
    width: '70%',
  },

  inputButton: {
    width: '30%',
  }

});
