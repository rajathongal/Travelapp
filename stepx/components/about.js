import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity ,Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function About({navigation})  {
    return (
      <View style={{ flex:1,width: 100 + "%", height: 100 + "%", }}>
         <View style={styles.tempnav}>
            <View style={{ left: 0, flexDirection: 'row'}}> 
             <TouchableOpacity 
              onPress={() => navigation.openDrawer()}
             >
               <Image
                 source={require('./images/Menu.png')}
                 style={styles.img}
               />

              
             </TouchableOpacity>
            </View>
         </View>
         <Text> About Screen </Text>
      </View>
     
     
    
    );
  
}

/* <View style={flex=1, alignSelf='center', justifyContent='center'}>
        <Text>Homescreen</Text>
        <Button
        onPress={() => navigation.openDrawer()}
        title="open"
      />

      <Button onPress={() => navigation.navigate('Detail')}
      title="detail"
      />
      </View>*/ 


const styles = StyleSheet.create({
  tempnav: {
    width: 100 + "%", 
    height:60,
    borderBottomWidth : StyleSheet.hairlineWidth,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'flex-start'
},
img:{
  width:30,
  height:30,
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  margin: 15,  

},
})