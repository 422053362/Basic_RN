import {
  ADD_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  DELETE_PLACE
} from '../actions/actionTypes';
import placeImage from '../../../src/assets/blue-german-shepherd-pictures-1.jpg';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: prevState.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: placeImage
      };

      case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place  => {
          return  place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      }

    default:
      state;
  }
}

export defaul reducer;
