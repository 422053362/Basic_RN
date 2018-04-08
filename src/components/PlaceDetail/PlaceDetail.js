import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button
  } from 'react-native'

const PlaceDetail = props => {
  let modalContent = null;
  if(props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.placeName} />
        <Text>{props.selectedPlace.placeName}</Text>
      </View>
    )
  }

  return (
    <Modal>
      <View>
        {modalContent}
        <View>
          <Button title='Delete'/>
          <Button title='Close'/>
        </View>
      </View>
    </Modal>
  )
}

export default PlaceDetail;
