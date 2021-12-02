import React, {useState} from 'react';
import styled from "styled-components";
import {Field, Formik, ErrorMessage, Form} from 'formik'
import closeIcon from '../../assets/shared/mobile/icon-close.svg'
import {H1Form} from "../../Pages/NewFeedbackPage";
import {register_validation_schema, login_validation_schema} from "../auth_schema/auth_shema";
import {Button} from "../UI/Button";
import {useAuthContext} from "../context/auth_context";

const REGISTER_URL = 'https://frontend-mentor-backend.herokuapp.com/api/auth/register/'
const LOGIN_URL = 'https://frontend-mentor-backend.herokuapp.com/api/auth/login/'

const initialValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
}

const RegisterModal = () => {
    const {setAuthModal, authenticateUser} = useAuthContext()
    const [isLogin, setIsLogin] = useState(true)
    const AUTH_URL = isLogin ? LOGIN_URL : REGISTER_URL
    const [imageUrl, setImageUrl] = useState('')

    const submitHandler = (values) => {
        authenticateUser(values, imageUrl, AUTH_URL)
    }

    return (
        <Wrapper isLogin={isLogin}>
            <div className="close-icon">
                <img onClick={() => setAuthModal(false)} src={closeIcon} alt=""/>
            </div>
            <div className="form">
                <H1Form>{isLogin ? 'Login to Your account' : 'Create new account'}</H1Form>
                <Formik
                    validationSchema={isLogin ? login_validation_schema : register_validation_schema}
                    initialValues={initialValues}
                    onSubmit={submitHandler}>
                    <Form>
                        <label htmlFor='username'>Username</label>
                        <Field type='text' name='username'/>
                        <ErrorMessage name='username' render={msg => <p>{msg}</p>}/>

                        <label>Password</label>
                        <Field type='password' name='password'/>
                        <ErrorMessage name='password' render={msg => <p>{msg}</p>}/>

                        {!isLogin ?
                            <>
                                <label>First Name</label>
                                <Field type='text' name='first_name'/>
                                <ErrorMessage name='first_name' render={msg => <p>{msg}</p>}/>

                                <label>Last Name</label>
                                <Field type='text' name='last_name'/>
                                <ErrorMessage name='last_name' render={msg => <p>{msg}</p>}/>

                                <label>Select You picture</label>
                                <input
                                    onChange={(event) => setImageUrl(event.target.files[0])}
                                    name='image'
                                    type='file'
                                    accept='image/*'/>
                            </> : undefined}

                        <Button
                            className='button'
                            marginRight={'0'}
                            type='submit'>
                            {isLogin ? 'Login' : 'Create Account'}
                        </Button>
                    </Form>
                </Formik>
                {isLogin ?
                    <h2 onClick={() => setIsLogin(false)}>Don't have account?</h2> :
                    <h2 onClick={() => setIsLogin(true)}>Already have account?</h2>
                }
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  position: fixed;
  z-index: 400;

  .close-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-top: 20px;

    > img {
      height: 40px;
      cursor: pointer;
    }
  }

  .form {
    height: ${props => props.isLogin ? '400px' : '550px'};
    width: 400px;
    background: #F7F7FD;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 15px;

    > form {
      display: flex;
      flex-direction: column;

      > input {
        height: 40px;
        border-radius: 10px;
        outline: none;
        border: none;
        margin-bottom: 10px;
        font-size: 15px;
        padding-left: 15px;
      }

      > label {
        font-size: 14px;
      }

      > p {
        color: red;
        margin-top: -7px;
        margin-bottom: 7px;
        font-size: 14px;
      }

      .button {
        margin-top: 10px;
        margin-bottom: 15px;
      }

    }

    > h1 {
      text-align: center;
    }

    > h2 {
      text-decoration: underline;
      cursor: pointer;
    }

  }

  @media (max-width: 500px) {

    .form {
      width: 300px;
    }

    .close-icon {
      > img {
        height: 20px;
      }
    }
  }


`

export default RegisterModal;