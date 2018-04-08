import { createStore, combineReducer } from 'redux'
import placesReducers from './reducers/places';

const rootReducer = combineReducer({
  places: placesReducers
})


const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;
