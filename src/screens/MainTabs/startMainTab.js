import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'places.FindPlace',
        label: 'Find Place',
        title: 'Find Place'
      },
      {
        screen: 'places.SharePlace',
        label: 'Share Place',
        title: 'Share Place'
      }
    ]
  })
}


export default startTabs;
