import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate<string>('HomeScreen')}
      />
    </View>
  );
};
