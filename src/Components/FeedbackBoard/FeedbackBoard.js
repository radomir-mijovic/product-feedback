import React from 'react';
import styled from "styled-components";
import backgroundHeader from '../../assets/suggestions/desktop/background-header.png'

const FeedbackBoard = () => {
    return (
        <BoardWrapper>
            <h1>Frontend Mentor</h1>
            <h2>Feedback Board</h2>
        </BoardWrapper>
    );
};

const BoardWrapper = styled.div`
  height: 137px;
  width: 255px;
  background: url(${backgroundHeader});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  > h1, h2 {
    color: #ffff;
    padding-left: 1rem;
  }
  
  > h1 {
    font-weight: 700;
  }
  
  > h2 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
  
  @media (max-width: 1150px) {
    width: 223px;
    height: 178px;
  }
`

export default FeedbackBoard;