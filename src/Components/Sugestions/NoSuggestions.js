import React from 'react';
import styled from "styled-components";
import emptyIcon from '../../assets/suggestions/illustration-empty.svg'
import {Button} from "../UI/Button";
import {useHistory} from "react-router-dom";

const NoSuggestions = ({marginLeft, marginTop}) => {
    const history = useHistory()

    const addFeedbackHandler = (e) => {
        e.preventDefault()
        history.push('/new-feedback')
    }
    return (
        <Wrapper marginLeft={marginLeft} marginTop={marginTop}>
            <div>
                <img src={emptyIcon} alt="No feedbacks yet"/>
                <h1>There is no feedback yet.</h1>
                <h2>
                    Got a suggestion? Found a bug that needs to be squashed?
                    <br/>
                    We lobe hearing about new ideas to improve our app.
                </h2>
                <Button
                    onClick={e => addFeedbackHandler(e)}
                    height={'44px'}
                    width={'158px'}>
                    + Add a Feedback
                </Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: auto;
  height: ${props => props.height || '600px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff;
  margin-left: ${props => props.marginLeft || '30px'};
  margin-top: ${props => props.marginTop || undefined};
  border-radius: 5px;

  > div {
    height: 380px;
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > img {
      height: 136px;
      width: 130px;
    }

    > h1 {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -.33px;
    }

    > h2 {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      width: 100%;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0;
    margin-top: 24px;
  }

  @media (max-width: 700px) {
    margin-top: 0;
  }
`


export default NoSuggestions;