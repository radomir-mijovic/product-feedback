import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../UI/Button";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const AddComment = ({id}) => {
    const [commentText, setCommentText] = useState('')
    const {addComment} = useProductFeedbackContext()

    const addCommentHandler = (e) => {
        e.preventDefault()
        addComment(id, commentText)
        setCommentText('')
    }

    return (
        <Wrapper>
            <h1>Add Comment</h1>
            <TextArea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}/>
            <div>
                <h2>250 Characters left</h2>
                <Button
                    onClick={addCommentHandler}
                    marginRight={'0'}>
                    Post Comment
                </Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 246px;
  background: #ffff;
  border-radius: 10px;
  padding: 24px 33px;

  > h1 {
    margin-bottom: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      font-weight: 400;
      color: #647196;
    }
  }

  @media (max-width: 500px) {

    > div {
      > h2 {
        font-size: 13px;
      }
    }
  }
`

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border: none;
  background: #F7F8FD;
  margin-bottom: 16px;
  padding: 16px 24px;
`

export default AddComment;