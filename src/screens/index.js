import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyNotes from './mynotes';
import Feed from './feed'
import Favorites from './favorites'

const Tab = createBottomTabNavigator();

export default function Screens() {
  return(
    <NavigationContainer>
      <Tab/>
      <Tab/>
      <Tab/>
    </NavigationContainer>
  )
}