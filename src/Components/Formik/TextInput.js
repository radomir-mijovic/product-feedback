import React from 'react';
import {useField, ErrorMessage} from 'formik'
import styled from "styled-components";

const TextInput = ({...props}) => {
    const [field] = useField(props)

    return (
        <>
            <input {...field} {...props}/>
            <ErrorMessage name='title' render={(msg) => <P>{msg}</P>}/>
        </>
    );
};

const P = styled.p`
  color: #D73737;
  margin-top: -20px;
  font-size: 14px;
  margin-bottom: 5px;
`

export default TextInput;