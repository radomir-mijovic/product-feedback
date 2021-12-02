import React from 'react';
import styled from "styled-components";
import RoadmapCard from "./RoadmapCard";

const RoadMapFeedbacks = ({...item}) => {
    return (
        <Wrapper marginBottom={'32px'}>
            <RoadmapCard {...item}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  > h2 {
    margin-bottom: ${props => props.marginBottom};
    font-size: 16px;
  }

  @media (max-width: 900px) {
    > h1, h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    > h1 {
      font-size: 18px;
    }

    > h2 {
      margin-bottom: 24px;
    }
  }
`

export default RoadMapFeedbacks;