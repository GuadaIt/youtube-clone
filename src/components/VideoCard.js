import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 20px; 
  &:hover {
    cursor: pointer;
  };
  .thumbnail-container {
    width: 50%;
    margin-right: 5px;
    > img {
      height: 100%; 
      width: 100%;
      object-fit: cover;         
    };
  };
  .thumbnail-details {
    width: 50%;
    text-align: left;
    > h4 {
      margin: 0 0 4px 0;
      max-height: 50px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      font-size: 15px;
      line-height: 1.4;
    };
  };
`;

const VideoCard = ({ videoInfo, onSelectedVideo }) => {

  const { snippet: {thumbnails: {medium: { url } } } } = videoInfo;
  const { snippet: { title, channelTitle, publishedAt } } = videoInfo;
  const datePosted = new Date(publishedAt).toDateString();

  return (
    <Article onClick={() => onSelectedVideo(videoInfo)}>
      <div className='thumbnail-container'>
        <img src={url} alt={title}/>
      </div>
      <div className='thumbnail-details'>
        <h4>{title}</h4>
        <p>{channelTitle}</p>
        <p>{datePosted}</p>
      </div>
    </Article>
  );
};

export default VideoCard;