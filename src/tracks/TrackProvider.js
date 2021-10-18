import React, {useState, useCallback, createContext} from 'react';

export const TrackContext = createContext();

function TrackProvider({initialLikedTracks = [], children}) {
  const [likedTracks, setLikedTracks] = useState(
    TrackSet.fromArray(initialLikedTracks),
  );

  const toggleLike = useCallback(trackId => {
    setLikedTracks(tracks => tracks.toggle(trackId));
  }, []);

  return (
    <TrackContext.Provider value={{likedTracks, toggleLike}}>
      {children}
    </TrackContext.Provider>
  );
}

class TrackSet {
  constructor(initialValue) {
    this.tracks = initialValue || new Set();
  }

  toggle(trackId) {
    const tracks = this.cloneTracks();
    if (tracks.has(trackId)) {
      tracks.delete(trackId);
    } else {
      tracks.add(trackId);
    }
    return new TrackSet(tracks);
  }

  cloneTracks() {
    return new Set(this.tracks);
  }

  includes(trackId) {
    return this.tracks.has(trackId);
  }

  static fromArray(tracks) {
    return new TrackSet(new Set(tracks));
  }
}

export default TrackProvider;
