import React from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
  padding: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: end;
  .comment-profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: lightblue;
    margin-right: 15px;
  };
  .comment-content {
    max-width: 90%;
    h4, .date {
      display: inline-block;
      margin: 0 15px 10px 0;
    };
    p {
      font-size: 15px;
    };
  };
`;

const CommentCard = ({ info }) => {

  let publishedDate = new Date(info.topLevelComment.snippet.publishedAt).toLocaleString();

  return (
    <CommentDiv>
      {info &&
      <>
        <div className="comment-profile-img"></div>
        <div className="comment-content">
          <h4>{info.topLevelComment.snippet.authorDisplayName}</h4>
          <p className="date">{publishedDate}</p>
          <p>{info.topLevelComment.snippet.textOriginal}</p>
        </div>
      </>
      }
    </CommentDiv>
  );
};

export default CommentCard;