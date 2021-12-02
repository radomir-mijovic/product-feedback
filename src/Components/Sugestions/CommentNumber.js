import React from 'react';
import styled from "styled-components";
import commentIcon from "../../assets/shared/icon-comments.svg";

const CommentNumber = ({children}) => {
    return (
        <Wrapper>
            <img src={commentIcon} alt=""/>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 44px;
  color: #3A4374;

  > img {
    width: 18px;
    height: 16px;
  }
  
  @media (max-width: 900px) {
    justify-content: space-around;
    > h1 {
      font-size: 13px;
    }
  }
`

export default CommentNumber;