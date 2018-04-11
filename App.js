import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

Navigation.registerComponent(
  'places', () => AuthScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'places',
    title: 'Login'
  }
})
