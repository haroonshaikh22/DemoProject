import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Myprofile from '../screens/drawerContents/Myprofile';
import {DrawerActions} from '@react-navigation/native';
import Settings from '../screens/drawerContents/Settings';
import {DrawerStack} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<DrawerStack>();

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyProfile"
        component={Myprofile}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => DrawerActions.openDrawer()}>
              <Text>Menu</Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => DrawerActions.openDrawer()}>
              <Text>Menu</Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {MyProfileStackNavigator, SettingsStackNavigator};
