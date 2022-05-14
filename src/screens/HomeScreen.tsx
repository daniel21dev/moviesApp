import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate<string>('DetailScreen')}
      />
    </View>
  );
};
