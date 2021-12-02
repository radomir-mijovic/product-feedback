import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../UI/Button";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const PostReply = ({id, setCommentIndex}) => {
    const [isReply, setIsReply] = useState('')
    const {addReply} = useProductFeedbackContext()

    const replyHandler = (e) => {
        e.preventDefault()
        addReply(id, isReply)
        setCommentIndex(100)
    }


    return (
        <Wrapper>
            <textarea onChange={(e =>  setIsReply(e.target.value))}/>
            <Button
                type='button'
                onClick={replyHandler}
                height={'44px'}
                width={'120px'}
                marginRight={'0'}>
                Post Reply
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-height: 80px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding-left: 72px;
  margin-top: 24px;

  > textarea {
    min-height: 80px;
    width: 70%;
    padding: 16px 24px;
    background: #F7F8FD;
    border: 1px solid #4661E6;
    border-radius: 5px;
    resize: none;
    outline: none;

  }
  
  @media (max-width: 600px) {
    padding-left: 15px;
    flex-direction: column;
    align-items: center;
    
    > textarea {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`

export default PostReply;