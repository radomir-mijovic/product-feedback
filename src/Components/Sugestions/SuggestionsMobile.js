import React from 'react';
import styled from "styled-components";
import {CategoryButton} from "../Categories/Categories";
import ButtonUpVote from "../UI/ButtonUpVote";
import CommentNumber from "./CommentNumber";
import {Link} from "react-router-dom";

const SuggestionsMobile = ({padding, title, description, up_votes, id, category, comments}) => {

    return (
        <Wrapper padding={padding}>
            <div className="suggestion">
                <Link to={`/feedback-detail/${id}`}>
                    <h3 className='head'>{title}</h3>
                    <h3>{description}</h3>
                    <CategoryButton>
                        {category}
                    </CategoryButton>
                </Link>
                <Bottom>
                    <ButtonUpVote up_votes={up_votes} id={id}>
                        <h4>{up_votes}</h4>
                    </ButtonUpVote>
                    <CommentNumber>
                        {comments && <h1>{comments.length}</h1>}
                    </CommentNumber>
                </Bottom>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-left: ${props => props.padding || '24px'};
  padding-right: ${props => props.padding || '24px'};

  .suggestion {
    width: 100%;
    height: auto;
    background: #ffff;
    border-radius: 10px;
    padding: 24px;
    cursor: pointer;

    > a {
      text-decoration: none;

      > h3 {
        font-size: 13px;
        font-weight: 400;
        color: #647196;
        margin-bottom: 9px;
      }
    }

    .head {
      font-weight: 700;
      color: #3A4374;
    }

    .bottom {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

  }

  @media (min-width: 700px) {
    display: none;
  }
`

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export default SuggestionsMobile;