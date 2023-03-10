/* eslint-disable */
import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const linking = {
    prefixes: ['peoplesapp://'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Home: {path: 'home'},
        Details: {path: 'details/:personId'},
      },
    },
  };
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
