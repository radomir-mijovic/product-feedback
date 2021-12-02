import React from 'react';
import errorPageImg from '../assets/no_page_found.jpg'
import styled from "styled-components";
import {Link} from "react-router-dom";

const NoPageFound = () => {
    return (
        <Wrapper>
            <Link to='/'>
                Go Back
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${errorPageImg});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > a {
    font-size: 30px;
    color: #ffff;
  ;
  }
`

export default NoPageFound;