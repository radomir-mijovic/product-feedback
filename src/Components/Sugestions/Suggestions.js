import React from 'react';
import styled from "styled-components";
import ButtonUpVote from "../UI/ButtonUpVote";
import {CategoryButton} from "../Categories/Categories";
import CommentNumber from "./CommentNumber";
import {Link} from "react-router-dom";

const Suggestions = ({width, margin, cursor, title, description, up_votes, id, category, comments}) => {

    return (
        <SuggestionStyled
            cursor={cursor}
            width={width}
            margin={margin}>
            <div className="right-side">
                <ButtonUpVote up_votes={up_votes} id={id}>
                    <h4>{up_votes}</h4>
                </ButtonUpVote>
                <Link to={`/feedback-detail/${id}`}>
                    <div className='info'>
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                        <CategoryButton hoverColor={'#F2F4FF'} cursor={'unset'} className='button'>
                            {category}
                        </CategoryButton>
                    </div>
                </Link>
            </div>
            <CommentNumber>
                <h1>{comments && comments.length}</h1>
            </CommentNumber>
        </SuggestionStyled>
    )
};

export const SuggestionStyled = styled.div`
  width: ${props => props.width || '825px'};
  height: auto;
  background-color: #ffff;
  margin-left: ${props => props.margin || '2rem'};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 32px 28px;
  margin-bottom: 20px;

  .right-side {
    display: flex;

    > a {
      text-decoration: none;
      cursor: unset;

      .info {
        margin-left: 40px;
        cursor: ${props => props.cursor || 'pointer'};

        > h2 {
          color: #647196;
          font-weight: 400;
          max-width: 470px;
        }

        > button {
          margin-top: 12px;
        }
      }
    }
  }

  @media (max-width: 1150px) {
    width: auto;
    margin-left: 0;
  }

  @media (max-width: 699px) {
    display: none;
  }
`


export default Suggestions;