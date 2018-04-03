import React, { Component } from 'react'
import {
  View,
  TextInput
} from 'react-native'

class PlaceInput extends Component {
  render() {
    return (
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
    )
  }
}

export default PlaceInput;
