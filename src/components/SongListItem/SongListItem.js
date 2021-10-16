import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../Text';

const song = {
  name: "Can't Stop",
  artist: 'Red Hot Chili Peppers',
  image: require('../../assets/songs-covers/rchp.jpeg'),
};

function SongListItem({rightAction}) {
  const {name, artist, image} = song;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} fadeDuration={0} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <View>{rightAction}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 71,
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: 51,
    height: 51,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  artist: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});

export default SongListItem;
