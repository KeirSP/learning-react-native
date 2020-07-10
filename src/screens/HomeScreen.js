import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedOne from '../components/FeedOne';
import FeedTwo from '../components/FeedTwo';


const FeedStack = createStackNavigator();

export default function FeedScreen() {
 return (
   <FeedStack.Navigator>
    <FeedStack.Screen 
        name="Feed One" 
        component={FeedOne}
        options = {{
            title: "Feed the First"
    }} />             
    <FeedStack.Screen 
        name="Feed Two" 
        component={FeedTwo}
        options = {{
            title: "Feed the Second"
        }} />
   </FeedStack.Navigator>
  );
}