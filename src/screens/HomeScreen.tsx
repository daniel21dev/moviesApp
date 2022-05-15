import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {peliculasEnCine, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

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
