import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

Navigation.registerComponent('places', () => AuthScreen);
Navigation.registerComponent('places.SharePlace', () => SharePlaceScreen)
Navigation.registerComponent('places.FindPlace', () => FindPlaceScreen)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'places',
    title: 'Login'
  }
})
