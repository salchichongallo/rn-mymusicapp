import React from 'react';
import {Image, View} from 'react-native';
import Background from '../../components/Background';
import SongListItem, {
  SongLikeButton,
} from '../../components/SongListItem/index';
import Text from '../../components/Text';
import {styles, Title} from './Home.styles';
import LikedSongsLink from './LikedSongsLink';
import UserName from './UserName';

function Home() {
  return (
    <Background>
      <View style={styles.header}>
        <Image
          source={require('../../assets/spotify-icon.png')}
          fadeDuration={0}
          style={styles.icon}
        />
        <LikedSongsLink />
      </View>
      <View style={styles.subHeader}>
        <Title>Home</Title>
        <UserName>salchichongallo</UserName>
      </View>
      <View style={styles.songsSection}>
        <Text style={styles.sectionTitle}>Songs</Text>
        <SongListItem rightAction={<SongLikeButton />} />
        <SongListItem rightAction={<SongLikeButton liked />} />
        <SongListItem rightAction={<SongLikeButton />} />
      </View>
    </Background>
  );
}

export default Home;
