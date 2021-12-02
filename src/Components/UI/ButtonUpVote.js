import React from "react";
import styled from "styled-components";
import arrowUpIcon from '../../assets/shared/icon-arrow-up.svg'
import {useProductFeedbackContext} from "../context/product_feedback_context";

const ButtonUpVote = ({children, id, up_votes}) => {
    const {updateUpVotes} = useProductFeedbackContext()

    const upVotesHandler = () => {
        const newUpVote = up_votes + 1
        updateUpVotes(id, newUpVote)
    }

    return (
        <ButtonUpVoteWrapper onClick={upVotesHandler} type='button'>
            <img src={arrowUpIcon} alt=""/>
            {children}
        </ButtonUpVoteWrapper>
    )
}

const ButtonUpVoteWrapper = styled.button`
  width: 40px;
  height: 53px;
  background: #F2F4FF;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #3A4374;
  
  > img {
    width: 9px;
    height: 6px;
    margin-top: 2px;
  }
  
  :hover {
    background: #CFD7FF;
  }
  
  @media (max-width: 700px) {
    flex-direction: row;
    width: 69px;
    height: 32px;
  }
`

export default ButtonUpVote;
