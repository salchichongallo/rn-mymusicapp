import React from 'react';
import {Image, Pressable, View, StyleSheet} from 'react-native';
import Text from '../../components/Text';

function LikedSongsLink() {
  return (
    <Pressable style={styles.button}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/heart-outline.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>Liked</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.37)',
    letterSpacing: 0.5,
    fontSize: 12,
    lineHeight: 12,
  },
});

export default LikedSongsLink;
