import React from 'react';
import styled from "styled-components";
import {DotStatus} from "./RoadmapInfo";
import {CategoryButton} from "../Categories/Categories";
import ButtonUpVote from "../UI/ButtonUpVote";
import CommentNumber from "../Sugestions/CommentNumber";
import {Bottom} from "../Sugestions/SuggestionsMobile";

const RoadmapCard = ({status, title, description, category, up_votes, id, comments}) => {

    return (
        <CardWrapper status={status}>
            <DotStatus width={'115px'}>
                <div className={`dot ${status}`}/>
                <h2>{status}</h2>
            </DotStatus>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <CategoryButton>
                {category}
            </CategoryButton>
            <Bottom>
                <ButtonUpVote up_votes={up_votes} id={id}>
                    <h4>{up_votes}</h4>
                </ButtonUpVote>
                <CommentNumber>
                    <h1>{comments.length}</h1>
                </CommentNumber>
            </Bottom>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
  width: 100%;
  min-height: 272px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 25px 32px;

  border-top: 6px solid ${props => {
    if (props.status === 'Planned') {
      return '#F49F85'
    }
    if (props.status === 'In-Progress') {
      return '#AD1FEA'
    }
    if (props.status === 'Live') {
      return '#62BCFA'
    }

  }};
  margin-top: 24px;

  > h1 {
    margin-top: 8px;
    margin-bottom: 4px;
  }

  > h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 1150px) {

    > h1, h2 {
      font-size: 13px;
    }
  }

  @media (max-width: 900px) {
    padding: 25px 20px;
  }
`

export default RoadmapCard;