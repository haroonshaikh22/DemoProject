import {View, Text} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {MyProfileStackNavigator, SettingsStackNavigator} from './DrawerStack';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function CustomeDrawerContent() {
  return (
    <DrawerContentScrollView>
      <View>
        <View>
          <Text>Rahul</Text>
          <Text>rahul@gmail.com</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen
        name="Myprofile"
        component={MyProfileStackNavigator}
        options={{drawerLabel: 'My Profile'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{drawerLabel: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
