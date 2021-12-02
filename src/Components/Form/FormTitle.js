import React from 'react';
import styled from "styled-components";
import TextInput from "../Formik/TextInput";

const FormTitle = () => {

    return (
        <Title>
            <h1>Feedback Title</h1>
            <h2>Add a short, descriptive headline</h2>
            <TextInput name='title' type='text'/>
        </Title>
    );
};

const Title = styled.div`
  > h1, h2 {
    font-size: 14px;
  }

  > h2 {
    color: #3A4374;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > input {
    width: 100%;
    height: 48px;
    background: #F7F8FD;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 24px;
    padding: 0 24px;
    font-size: 15px;
    color: #3A4374;
  }

  @media (max-width: 600px) {
    > h1, h2 {
      font-size: 13px;
    }
    
    > h2 {
        color: #647196;
      }
  }
`

export default FormTitle;