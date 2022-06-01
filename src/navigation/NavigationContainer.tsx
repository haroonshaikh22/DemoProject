import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer as NavigationContainerRN} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const NavigationContainer = () => {
  return (
    <NavigationContainerRN>
      <DrawerNavigator />
    </NavigationContainerRN>
  );
};

export default NavigationContainer;
