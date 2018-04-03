import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native'

class PlaceInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeName: '',
    }
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') return

    this.props.onPlaceAdded(this.state.placeName)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.typeInput}
            placeholder = 'Type something'
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title='Submit'
            style={styles.inputButton}
            onPress={this.placeSubmitHandler}
          />
      </View>
    )
  }
}

const styles  = StyleSheet.create({
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
})


export default PlaceInput;
