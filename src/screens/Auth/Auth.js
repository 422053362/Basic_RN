import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import startTabs from '../MainTabs/startMainTab';

class AuthScreen extends Component {

  loginHandler = () => {
    startTabs()
  }

  render() {
    return (
      <View>
        <Text>  This is the Auth screen</Text>
        <Button
          title='Login' onPress={this.loginHandler}
        />
      </View>
    );
  }
}

export default AuthScreen;
