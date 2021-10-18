/* eslint-disable no-shadow */
import vars from '../config/variables';

const {apiKey, username} = vars.spotify;

const NEW_RELEASES_URL = `https://v1.nocodeapi.com/${username}/spotify/sUbSvzyFScFecJbe/browse/new?api_key=${apiKey}`;

export default {
  async getReleases() {
    const response = await fetch(NEW_RELEASES_URL);
    const data = await response.json();
    return extractOnlyTracks(data);
  },
};

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
