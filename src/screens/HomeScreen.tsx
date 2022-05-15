import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    movieDB.get('/now_playing').then(resp => console.log(resp));
  }, []);

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
