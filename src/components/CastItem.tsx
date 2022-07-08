import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creaditsInterface';

interface Props {
  actor: Cast;
}
export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}} />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 7,

    elevation: 10,
    marginHorizontal: 20,
    paddingRight: 10,
    paddingTop: 5,
  },
  actorInfo: {
    marginLeft: 20,
    marginTop: 5,
  },
});
