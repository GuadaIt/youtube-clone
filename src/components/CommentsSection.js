import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import apiCall from '../api/apiCall';
import CommentCard from './CommentCard';

const StyledCommentsSection = styled.section`
  width: 90%;
  padding-top: 50px;
`;

const CommentsSection = ({ video }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async function () {
      let results = await apiCall.get('commentThreads', {
        params: {
          part: 'snippet',
          maxResults: 10,
          videoId: video.id.videoId,
          key: process.env.REACT_APP_API_KEY
        }
      });
      setComments(results.data.items);
    })();
  }, [video]);

  return (
    <StyledCommentsSection>
      <h2>Comments:</h2>
      {comments.map(comment => <CommentCard info={comment.snippet} key={comment.snippet.topLevelComment.id}/> )}
    </StyledCommentsSection>
  );
};

export default CommentsSection;