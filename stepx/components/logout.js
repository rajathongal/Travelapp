import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function Logout({navigation})  {
    return (
      <View>
        <Text>logout!</Text>
      
    <Button
    onPress={() => navigation.openDrawer()}
    title="open"/>
    </View>
    );
  
}