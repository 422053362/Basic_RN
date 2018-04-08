import React from 'react';
import {
  ScrollView,
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
    <ScrollView style={styles.listContainer}>
      {placesOutput}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',

  }
})

export default PlaceList;
