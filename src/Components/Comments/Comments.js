import React, {useState} from 'react';
import styled from "styled-components";
import SubComment from "./SubComment";
import PostReply from "../Replies/PostReply";

const Comments = ({comments}) => {
    const [commentIndex, setCommentIndex] = useState(1000)

    const replyHandler = (index) => {
        setCommentIndex(index)
    }

    return (
        <>
            {comments &&
            <CommentsWrapper>
                <h1>{comments && comments.length} Comments</h1>
                {comments && comments.map((comment, index) => {
                    const {id, text, user, replies} = comment;
                    const {username, full_name, image_url} = user;
                    return (
                        <InnerComment key={index}>
                            <div className="info">
                                <div>
                                    <img src={image_url} alt=""/>
                                    <div className="name">
                                        <h1>{full_name}</h1>
                                        <h2>@{username}</h2>
                                    </div>
                                </div>
                                <h2 onClick={() => replyHandler(index)} className="reply">
                                    Reply
                                </h2>
                            </div>
                            <p>{text}</p>
                             {commentIndex === index ? <PostReply id={id} setCommentIndex={setCommentIndex}/> : null}
                            {replies.length > 0 && <SubComment replies={replies}/>}
                        </InnerComment>
                    )
                })}
            </CommentsWrapper>
            }
        </>
    );
};

const CommentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 24px 0;
  padding: 24px 34px;
  background: #ffff;
  border-radius: 10px;

  > h1 {
    margin-bottom: 28px;
  }

  @media (max-width: 500px) {

    > h1 {
      margin-bottom: 24px;
    }
`

export const InnerComment = styled.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  :last-child {
    border-bottom: none;
  }

  > p {
    margin-top: 17px;
    padding-left: 72px;
    font-size: 15px;
    color: #647196;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;

      .name {
        > h1, h2 {
          font-size: 14px;
        }

        > h2 {
          color: #647196;
          font-weight: 400;
        }
      }

      > img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 32px;
      }
    }

    .reply {
      font-size: 13px;
      font-weight: 700;
      color: #4661E6;
      cursor: pointer;
    }
  }


  .line {
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    bottom: -32px;
  }

  @media (max-width: 500px) {

    > p {
      font-size: 13px;
      padding-left: 0;
    }
  }

  .info {
    > div {

      > img {
        margin-right: 16px;
      }
    }
  }

  .name {
    > h1, h2 {
      font-size: 13px;
    }
  }
`

export default Comments;