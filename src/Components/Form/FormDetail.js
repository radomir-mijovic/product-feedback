import React from 'react';
import styled from "styled-components";
import {ErrorMessage, Field} from "formik";

const FormDetail = () => {

    return (
        <Detail>
            <h1>Feedback Detail</h1>
            <h2>Include any specific comments on what should be improved, added, etc.</h2>
            <Field  name='description' as='textarea'/>
            <ErrorMessage name='description' render={(msg) => {
                return <p>{msg}</p>
            }}/>
        </Detail>
    );
};

const Detail = styled.div`
  > h1, h2 {
    font-size: 14px;
  }

  > h2 {
    color: #3A4374;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > textarea {
    font-size: 15px;
    color: #3A4374;
    width: 100%;
    height: 96px;
    border-radius: 5px;
    background: #F7F8FD;
    outline: none;
    border: none;
    resize: none;
    padding: 24px 24px;
  }

  > p {
    color: #D73737;
    font-size: 14px;
  }

  .error {
    border: 1px solid #D73737;
  }

  @media (max-width: 600px) {
    > h1, h2 {
      font-size: 13px;
    }

    > h2 {
      color: #647196;
    }

    > textarea {
      height: 120px;
    }
  }
`

export default FormDetail;