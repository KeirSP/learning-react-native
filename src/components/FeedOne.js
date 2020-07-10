import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function FeedOne({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed 1</Text>
        <Button 
          title = "Go to Feed Two"
          onPress = {() => 
            navigation.navigate('Feed Two')
          }
        />
      </View>
    );
  }