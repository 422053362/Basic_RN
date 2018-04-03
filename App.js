import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import ListItem from './src/components/Listitem/Listitem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      places: []
    }
  }


  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ))
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
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

  listContainer: {
    width: '100%',

  }

});
