import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

function SongLikeButton({onPress, liked = false}) {
  const likeImage = liked
    ? require('../../assets/heart-filled.png')
    : require('../../assets/heart-outline.png');
  return (
    <Pressable onPress={onPress} style={styles.likeButton}>
      <Image
        source={likeImage}
        style={styles.likeButtonIcon}
        fadeDuration={0}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  likeButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonIcon: {
    width: 24,
    height: 24,
  },
});

export default SongLikeButton;
