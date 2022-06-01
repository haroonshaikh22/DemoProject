import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from '../screens/AllExpenses';
import RecentsExpenses from '../screens/RecentsExpenses';
import {
  AllExpenseStackNavigator,
  RecentsExpenseStackNavigator,
} from './MainStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6471',
        tabBarInactiveTintColor: '#878996',
        headerShown: false,
      }}>
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenseStackNavigator}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
        }}
      />
      <Tab.Screen
        name="RecentsExpenses"
        component={RecentsExpenseStackNavigator}
        options={{
          title: 'Recents Expenses',
          tabBarLabel: 'Recents Expenses',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
