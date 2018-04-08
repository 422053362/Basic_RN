import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button
  } from 'react-native'

const placeDetail = props => (
  <Modal>
    <View>
      <Image source={props.selectedPlace.placeName} />
      <Text>{props.selectedPlace.placeName}</Text>
      <View>
        <Button />
        <Button />
      </View>
    </View>
  </Modal>
)

export default placeDetail;
