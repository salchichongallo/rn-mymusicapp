import React, {useContext} from 'react';

import {TrackContext} from '../../tracks/TrackProvider';

import Text from '../../components/Text';
import {ErrorMessage} from '../../components/Field/Field.styles';
import ActivityIndicator from '../../components/ActivityIndicator';
import SongListItem, {SongLikeButton} from '../../components/SongListItem';

import TracksFetcher from './TracksFetcher';
import {styles} from './Home.styles';

function ReleasesContainer() {
  const {likedTracks, toggleLike} = useContext(TrackContext);
  return (
    <TracksFetcher>
      {({isLoading, data, error}) => {
        if (isLoading) {
          return <ActivityIndicator />;
        }

        if (error) {
          return (
            <ErrorMessage>An error ocurred, please try again.</ErrorMessage>
          );
        }

        return (
          <>
            <Text style={styles.sectionTitle}>Songs</Text>
            {data.map(song => (
              <SongListItem
                key={song.id}
                song={song}
                rightAction={
                  <SongLikeButton
                    onPress={() => toggleLike(song.id)}
                    liked={likedTracks.includes(song.id)}
                  />
                }
              />
            ))}
          </>
        );
      }}
    </TracksFetcher>
  );
}

export default ReleasesContainer;
