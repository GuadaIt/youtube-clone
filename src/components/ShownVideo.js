import React from 'react';
import styled from 'styled-components';
import CommentsSection from './CommentsSection';

const ShownVideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .video-container {
    text-align: center;
    iframe {
      width: 90%;
      height: 450px;
    };
    .details-container {
      width: 90%;
      text-align: left;
      display: inline-block;
      h3 {
        font-size: 30px;
        margin: 20px 0 10px;
      };
      .profile-details {
        display: flex;
        align-items: center;
        padding: 20px 0;
        .profile-container {
          background-color: blue;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        };
        .channel-title {
          font-weight: bold;
          font-size: 20px;
          margin: 0 15px;
        };
      };
      .video-description {
        padding-right: 40px;
      };
    };
  };
`;

const ShownVideo = ({ video }) => {

  const { snippet: { title, channelTitle, description, publishedAt } } = video;
  const datePosted = new Date(publishedAt).toDateString();
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <ShownVideoSection>
      <section className="video-container">
        <iframe src={url} title={title} frameBorder="0" />
        <div className="details-container">
          <h3>{title}</h3>
          <p>{datePosted}</p>
          <div className="profile-details">
            <div className="profile-container" />
            <span className="channel-title">{channelTitle}</span>
          </div>
          <p className="video-description">{description}</p>
        </div>
      </section>
      <CommentsSection video={video} />
    </ShownVideoSection>
  );
};

export default ShownVideo;