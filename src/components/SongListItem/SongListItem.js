import React from 'react';
import {View} from 'react-native';
import {styles, Thumbnail, TrackName, Artist} from './SongListItem.styles';

function SongListItem({song, rightAction}) {
  const {name, artist, image} = song;
  return (
    <View style={styles.container}>
      <Thumbnail source={{uri: image}} fadeDuration={0} />
      <View style={styles.content}>
        <TrackName numberOfLines={1}>{name}</TrackName>
        <Artist numberOfLines={1}>{artist}</Artist>
      </View>
      <View>{rightAction}</View>
    </View>
  );
}

export default SongListItem;
