import React, { useState, useEffect } from 'react';
import GlobalStyles from './styled/GlobalStyles';
import Main from './styled/App';
import { SearchBar, ShownVideo, SearchResults } from './components';
import apiCall from './api/apiCall';

const App = () => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      let results = await apiCall.get('search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: 'tom misch',
          key: apiKey,
          type: 'video'
        }
      });
      setNextPageToken(results.data.nextPageToken);
      setVideosList(results.data.items);
      setSelectedVideo(results.data.items[0]);
    };
    fetchVideos();
  }, []);

  const handleSubmit = async searchInput => {
    let results = await apiCall.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: searchInput,
        key: apiKey,
        type: 'video'
      }
    });
    setNextPageToken(results.data.nextPageToken);
    setVideosList(results.data.items);
    setSelectedVideo(results.data.items[0]);
  };

  const nextPage = async searchInput => {
    let results = await apiCall.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: searchInput,
        key: apiKey,
        type: 'video',
        pageToken: nextPageToken
      }
    });
    setNextPageToken(results.data.nextPageToken);
    setVideosList([...videosList, ...results.data.items]);
  };

  const onSelectedVideo = video => setSelectedVideo(video);

  return (
    <div className="App">
      <GlobalStyles />
      <SearchBar handleSubmit={handleSubmit} />
      {selectedVideo &&
        <Main>
          <ShownVideo video={selectedVideo} />
          <SearchResults videos={videosList} nextPage={nextPage} onSelectedVideo={onSelectedVideo} />
        </Main>
      }
    </div>
  );
};

export default App;
