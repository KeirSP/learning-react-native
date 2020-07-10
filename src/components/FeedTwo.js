import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function FeedTwo({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed 2</Text>
        <Button 
          title = "Go to Feed One"
          onPress = {() => 
            navigation.navigate('Feed One')
          }
        />
      </View>
    );
  }