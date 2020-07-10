import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function FeedScreen({ navigation }) {
    return (
    <View contentContainerStyle = {{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        height : '100%',
        width : '100%',
        }}>
        <Text> Home Screen </Text>
        <Button
            title = "Settings"
            onPress = {() => navigation.navigate('Settings')}
         />
      </View>

    );
  }