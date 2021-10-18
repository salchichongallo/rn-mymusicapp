import {useEffect, useState} from 'react';
import TracksService from '../../services/TracksService';

function TracksFetcher({children}) {
  const [state, setState] = useState({data: [], isLoading: true});

  useEffect(() => {
    let unmounted = false;

    TracksService.getReleases()
      .then(data => {
        if (!unmounted) {
          setState({data, isLoading: false});
        }
      })
      .catch(error => {
        console.error(error);
        setState({error, data: [], isLoading: false});
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return children(state);
}

export default TracksFetcher;
