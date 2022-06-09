import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllExpenses from '../screens/AllExpenses';
import {DrawerActions} from '@react-navigation/native';
import RecentsExpenses from '../screens/RecentsExpenses';
import {MainStack} from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<MainStack>();

const AllExpenseStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllExpenses"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => DrawerActions.openDrawer()}></Pressable>
          ),
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const RecentsExpenseStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecentsExpenses"
        component={RecentsExpenses}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {AllExpenseStackNavigator, RecentsExpenseStackNavigator};
