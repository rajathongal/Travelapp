import React, { Component, useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity ,Image, StyleSheet} from 'react-native';
import getBlogs from '../actions'
import connect from 'react-redux'
import { renderers } from 'react-native-popup-menu';




export class Homescreen extends Component {
 componentDidMount(){
   this.props.getBlogs()
 }
render() { 
    return (
      <>
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
             
                    <View >
                    <Image
                      source={require('./images/logo.png')}
                      style={{width:159, height:52, marginLeft:50}}
                    />                      
                    </View>

            </View>
         </View>
      </View>
     
      <View  style={{ flex:7.7,width: 100 + "%", height: 100 + "%" }} > 
        <Text>card</Text>
      </View>
    </>
    );
  
}
}


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

function mapStateToProps(state){
  return {
    listOfBlogs:state.blogs
  }
}

export default connect(mapStateToProps, {getBlogs})(Homescreen)