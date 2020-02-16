import React, { Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, Dimensions,} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import { Textarea } from 'native-base';

import {postBlogs} from '../actions/index'
const { width, height } = Dimensions.get('screen');


const options={
  title: 'Choose Picture',
  takePhotoButtonTitle: 'Use Camera',
  chooseFromLibraryButtonTitle: 'Choose From Gallery', 
}

export class PostScreen extends Component {

  
  constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      screenWidth: Dimensions.get("window").width,
        title: '',
        City: '',
        Description: '',
      
    }
}

submit = () => {
 this.props.postBlogs(this.state.title,this.state.City,this.state.Description, this.state.avatarSource)
  this.setState({
    title: '',
    City: '',
    Description: '',
    avatarSource: null,
  })
  this.props.navigation.navigate("Home")
}

selectImage=()=>{
  ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePic ker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source={uri: response.uri}
        this.setState({
          avatarSource: source,
        });
      }
 });
}




  render(){
    return(
      <View style={styles.container}> 
          <Text style={{left:125,}}>Post the Blog here</Text>
           
          <Text>Preview</Text>
          <View style={{marginLeft:20}}>
        <Image source={this.state.avatarSource}
        style={{width:275, height:175, marginLeft:10}}
        value={this.state.avatarSource}/>
          </View>

          <TextInput style={styles.input} placeholder="Title" onChangeText={title => this.setState({title})} value={this.state.title} />
          <TextInput   style={styles.input} placeholder="City" onChangeText={City => this.setState({City})}  value={this.state.City} />
          
           
          <Textarea placeholder="Add a description" 
                placeholderTextColor='#8A8F9E'   
                autoCorrect={true}
                maxLength={120}
                scrollEnabled={false}
                numberOfLines={10}
                style={styles.input}
                value={this.state.Description}
                onChangeText={Description => this.setState({Description})}/>
          <TouchableOpacity onPress={this.selectImage}>
              <Image
              source={require('./images/camera.png')}
              style={{width:30, height:30,opacity:0.2 ,alignContent:'center', justifyContent: "center", margin:10}}/>
            </TouchableOpacity>
        
            <Button title="Post" onPress={this.submit} style={styles.pstbtn}></Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    justifyContent:'center'
  },
  input:{
    marginTop:20,
    height:40,
   
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
  },
  pstbtn:{
    paddingVertical:20,
    marginTop:20,
    height:40,
    
  }
}) 

export default connect(null, {postBlogs})(PostScreen)