import React from 'react';
import styled from "styled-components";
import {HeaderWrapper} from "../Components/Header/Header";
import {Button} from "../Components/UI/Button";
import HeaderFeedback from "../Components/Header/HeaderFeedback";
import RoadMapFeedbacks from "../Components/Roadmap/RoadMapFeedbacks";
import RoadmapNavbarMobile from "../Components/Roadmap/RoadmapNavbarMobile";
import {useProductFeedbackContext} from "../Components/context/product_feedback_context";
import NoSuggestions from "../Components/Sugestions/NoSuggestions";

const RoadmapPage = () => {
    const {
        planned_feedbacks,
        in_progress_feedbacks,
        live_feedbacks
    } = useProductFeedbackContext()


    return (
        <Wrapper>
            <HeaderWrapper
                className='header'
                width={'100%'}
                height={'113px'}
                marginLeft={'0'}
                padding={'32px'}>
                <LeftSide>
                    <HeaderFeedback marginBottom={'0'}/>
                    <h1>Roadmap</h1>
                </LeftSide>
                <Button
                    height={'44px'}
                    width={'158px'}
                >
                    + Add Feedback
                </Button>
            </HeaderWrapper>
            <RoadmapNavbarMobile/>
            <FeedbackWrap>
                <div>
                    <h1>Planned ({planned_feedbacks.length})</h1>
                    <h2>Ideas prioritized for research</h2>
                    {planned_feedbacks.length === 0 ?
                        <NoSuggestions marginLeft={'0'} marginTop={'24px'}/> :
                        planned_feedbacks.map((item, index) => {
                            return (
                                <RoadMapFeedbacks key={index}  {...item}/>
                            )
                        })}
                </div>
                <div>
                    <h1>In-Progress ({in_progress_feedbacks.length})</h1>
                    <h2>Currently being developed</h2>
                    {in_progress_feedbacks.length === 0 ?
                        <NoSuggestions marginLeft={'0'}
                                       marginTop={'24px'}/> :
                        in_progress_feedbacks.map((item, index) => {
                            return (
                                <RoadMapFeedbacks key={index} {...item}/>
                            )
                        })}
                </div>
                <div>
                    <h1>Live ({live_feedbacks.length})</h1>
                    <h2>Released features</h2>
                    {live_feedbacks.length === 0 ?
                        <NoSuggestions marginLeft={'0'} marginTop={'24px'}/> :
                        live_feedbacks.map((item, index) => {
                            return (
                                <RoadMapFeedbacks key={index} {...item}/>
                            )
                        })}
                </div>
            </FeedbackWrap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 78px 165px;

  .header {
    margin-bottom: 48px;
  }

  @media (max-width: 1400px) {
    padding: 60px 120px;
  }

  @media (max-width: 1300px) {
    padding: 60px 70px;
  }

  @media (max-width: 1200px) {
    padding: 56px 40px;
    .header {
      margin-top: 0;
    }
  }

  @media (max-width: 700px) {
    padding: 0;

    .header {
      height: 100px;
      padding: 24px;
      margin-bottom: 0;

      > button {
        width: 134px;
        font-size: 13px;
      }
    }
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    color: #ffff;
    font-size: 24px;
  }

  > div {
    font-size: 14px;

    > a {
      > h3 {
        font-size: 14px;
        color: #ffff;
      }
    }
  }

  @media (max-width: 700px) {
    > h1 {
      font-size: 18px;
    }
  }

`

const FeedbackWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 31.5%);
  grid-gap: 30px;

  .no-feedback {
    height: 300px;
    width: 300px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }


  @media (max-width: 1150px) {
    grid-gap: 10px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export default RoadmapPage;