// import 'react-native-gesture-handler';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import Welcome from './src/welcome';
// import * as config from './src/common/config';
// import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './src/index';

AppRegistry.registerComponent('GreenInitiative', () => App);
registerRootComponent(App);
export default App;
