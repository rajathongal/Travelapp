import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default function Signin({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Signin</Text>
        <Button
          title="SIGN IN"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  
  const styles= StyleSheet.create({
      container:{
          flex:1,
          alignSelf:'center',
          justifyContent:'center'
      }
  }
  )