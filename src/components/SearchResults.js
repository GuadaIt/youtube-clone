import React from 'react';
import VideoCard from './VideoCard';
import styled from 'styled-components';

const Aside = styled.aside`
  min-width: 30%;
  margin: 10px;
  text-align: center;
  h2 {
    text-align: left;
    margin-bottom: 20px;
  };
  button {
    width: 50%;
    height: 30px;
  };
`;

const SearchResults = ({ videos, nextPage, onSelectedVideo }) => {

  const handleClick = () => nextPage();

  if (!videos) return <h1>Loading...</h1>;

  return (
    <Aside>
      <h2>Results</h2>
      {videos.map((video, index) => {
      return (
        <VideoCard videoInfo={video} 
                   key={video.id.videoId} 
                   onSelectedVideo={onSelectedVideo}
        />)}
      )}
      <button onClick={handleClick}>Load more</button>
    </Aside>
  );
};

export default SearchResults;