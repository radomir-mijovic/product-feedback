import React from 'react';
import styled from "styled-components";
import logoutIcon from '../../assets/suggestions/logout.svg'
import {useAuthContext} from "../context/auth_context";

const LogoutButton = () => {
    const {logoutUser} = useAuthContext()

    return (
        <LogoutButtonStyled onClick={logoutUser}>
            <img src={logoutIcon} alt='logout-btn' />
            <h2>Logout</h2>
        </LogoutButtonStyled>
    );
};

const LogoutButtonStyled = styled.button`
  position:fixed;
  bottom: 7px;
  right: 12px;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  z-index: 300;
  
  > img {
    height: 40px;
    width: 40px;
  }
  
  @media (max-width: 700px) {
    > img {
      height: 30px;
      width: 30px;
    }
    
    > h2 {
      display: none;
    }
  }
`

export default LogoutButton;