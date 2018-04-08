import React from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';

import ListItem from '../Listitem/Listitem';


const PlaceList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i} placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ))
  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',

  }
})

export default PlaceList;
