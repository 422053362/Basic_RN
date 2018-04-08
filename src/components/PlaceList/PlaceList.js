import React from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

import ListItem from '../Listitem/Listitem';


const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  }
})

export default PlaceList;
