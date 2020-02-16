/* React makes it painless to create interactive UIs. 
Design simple views for each state in your application, 
and React will efficiently update and render just the 
right components when your data changes. */

/*React Native lets you build mobile apps using only JavaScript. 
It uses the same design as React, 
letting you compose a rich mobile UI from declarative components.*/

/* You just use native components like 'View' and 'Text', 
instead of web components like 'div' and 'span'. */

import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default function HelloWorldApp()  {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  
}