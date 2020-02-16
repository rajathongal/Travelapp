import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../components/signin'
import Profile from '../components/profile'
import PostScreen from '../components/createscreen'
import HomeNavi from '../navigation/homeNavi'
import DetailedScreen from '../components/detailedview'

const Stack = createStackNavigator();

export default function SignNavi() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Signin"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}

      >
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={tabNavi} options={{headerShown: false}} independent={true}/>
        <Stack.Screen name="Detail" component={DetailedScreen} options={{headerShown: false}} independent={true}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();

export function tabNavi() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavi} independent={true}/>
        <Tab.Screen name="Create" component={PostScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
