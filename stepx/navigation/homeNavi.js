import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from '../components/homescreen'
import About from '../components/about'
import Logout from '../components/logout'
import React, { Component } from 'react';



const Drawer = createDrawerNavigator();

export default function HomeNavi() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
  );
}