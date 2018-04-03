import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import ListItem from './src/components/Listitem/Listitem';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      places: []
    }
  }

  handleInput = val => {
    this.setState({
      text: val
    })
  }

  addToStateAndDisplay = () => {
    if(this.state.text.trim() === '') return
    this.setState(prevState => {
      return {
        // places: [...prevState.places, ...prevState.text]
        places: prevState.places.concat(prevState.text)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ))
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
              title='Submit'
              style={styles.inputButton}
              onPress={this.addToStateAndDisplay}
            />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
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
  },

  listContainer: {
    width: '100%',

  }

});
