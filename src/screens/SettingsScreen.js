import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Text>Dark Mode</Text>
        <Text>Others</Text>
      </View>
    );
  }