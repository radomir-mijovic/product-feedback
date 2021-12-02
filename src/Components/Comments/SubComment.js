import React from 'react';
import {InnerComment} from "./Comments";
import styled from "styled-components";

const SubComment = ({replies}) => {

    return (
        <>
            {replies.map((item, index) => {
                const {reply, user} = item;
                const {username, full_name, image_url} = user;

                return (
                    <Wrapper key={index}>
                        <InnerComment className='reply'>
                            <div className="info">
                                <div>
                                    <img src={image_url} alt=""/>
                                    <div className="name">
                                        <h1>{full_name}</h1>
                                        <h2>@{username}</h2>
                                    </div>
                                </div>
                                <h2 className="reply">
                                </h2>
                            </div>
                            <p>{reply}</p>
                        </InnerComment>
                    </Wrapper>
                )
            })}
        </>
    )
};

const Wrapper = styled.div`
  margin-top: 32px;
  
  .reply {
    padding-left: 24px;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  
`

export default SubComment;