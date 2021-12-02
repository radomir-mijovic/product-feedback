import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import arrowLeftIcon from '../../assets/shared/icon-arrow-left.svg'

const HeaderFeedback = ({children, marginBottom}) => {
    return (
        <Wrapper marginBottom={marginBottom}>
            <Link to='/'>
                <img src={arrowLeftIcon} alt=""/>
                <h3>Go Back</h3>
            </Link>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom || '24px'};
  
  > a {
    width: 75.6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #647196;
    
    :hover {
      text-decoration: underline;
    }
  }
`

export default HeaderFeedback;