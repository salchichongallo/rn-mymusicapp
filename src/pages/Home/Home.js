import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import {useUser} from '../../auth';
import Background from '../../components/Background';

import {styles, Title} from './Home.styles';
import LikedSongsLink from './LikedSongsLink';
import UserName from './UserName';
import ReleasesContainer from './ReleasesContainer';

function Home() {
  const {username} = useUser();
  return (
    <Background>
      <ScrollView>
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
          <UserName>{username}</UserName>
        </View>
        <View style={styles.songsSection}>
          <ReleasesContainer />
        </View>
      </ScrollView>
    </Background>
  );
}

export default Home;
