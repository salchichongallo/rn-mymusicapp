/* eslint-disable no-shadow */
import {useEffect, useState, useCallback} from 'react';
import vars from '../../config/variables';

const {apiKey, username} = vars.spotify;

const NEW_RELEASES_URL = `https://v1.nocodeapi.com/${username}/spotify/sUbSvzyFScFecJbe/browse/new?api_key=${apiKey}`;

function TracksFetcher({children}) {
  const [state, setState] = useState({data: [], isLoading: true});

  const fetchReleases = useCallback(
    () =>
      fetch(NEW_RELEASES_URL)
        .then(response => response.json())
        .then(data =>
          setState({data: extractOnlyTracks(data), isLoading: false}),
        )
        .catch(error => {
          console.error(error);
          setState({error, data: [], isLoading: false});
        }),
    [],
  );

  useEffect(() => {
    fetchReleases();
  }, [fetchReleases]);

  return children(state);
}

function extractOnlyTracks({albums}) {
  return albums.items.map(item => {
    const {id, name} = item;
    const artist = item.artists.map(artist => artist.name).join(' & ');
    const image = (
      item.images.find(image => image.width === 300) || item.images[0]
    ).url;
    return {id, name, artist, image};
  });
}

export default TracksFetcher;
