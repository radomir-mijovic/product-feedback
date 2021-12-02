import React, {useState} from 'react';
import styled from "styled-components";
import HeaderFeedback from "../Components/Header/HeaderFeedback";
import {Button} from "../Components/UI/Button";
import addIcon from '../assets/shared/icon-plus.svg'
import FormTitle from "../Components/Form/FormTitle";
import FormCategory from "../Components/Form/FormCategory";
import FormDetail from "../Components/Form/FormDetail";
import {Formik, Form} from "formik";
import {auth_schema} from "../Components/auth_schema/auth_shema";
import {useProductFeedbackContext} from "../Components/context/product_feedback_context";
import {useHistory} from "react-router-dom";
import FormStatus from "../Components/Form/FormStatus";

const NewFeedbackPage = ({product_response}) => {
    const [isCategory, setIsCategory] = useState(product_response ? product_response.category : 'Feature')
    const [isStatus, setIsStatus] = useState(product_response && product_response.status)
    const {
        addNewFeedback,
        updateProductFeedback,
        isLoading,
        deleteFeedback,
    } = useProductFeedbackContext()
    const history = useHistory()


    let initialValues
    if (!product_response) {
        initialValues = {
            title: '',
            description: ''
        }
    } else if (product_response) {
        initialValues = {
            title: product_response.title,
            description: product_response.description
        }
    }

    const submitHandler = (values) => {
        if (!product_response) {
            const {title, description} = values;
            addNewFeedback(title, isCategory, description)
        } else if (product_response) {
            const {title, description} = values;
            const {id} = product_response
            updateProductFeedback(id, title, isCategory, isStatus, description)
        }
    }

    const deleteHandler = () => {
        const {id} = product_response;
        deleteFeedback(id)
    }

    return (
        <FormWrapper>
            <HeaderFeedback/>
            <div className='form'>
                <div className="image">
                    <img src={addIcon} alt=""/>
                </div>
                <H1Form>Create New Feedback</H1Form>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    validationSchema={auth_schema}>
                    <Form>
                        <FormTitle product_response={product_response}/>
                        <FormCategory
                            isCategory={isCategory}
                            product_response={product_response}
                            setIsCategory={setIsCategory}/>
                        {product_response &&
                        <FormStatus isStatus={isStatus} setIsStatus={setIsStatus}/>
                        }
                        <FormDetail product_response={product_response}/>
                        <div className="buttons">
                            {product_response &&
                            <Button
                                type='button'
                                disabled={isLoading && true}
                                className='delete-btn'
                                backgroundColor={'#D73737'}
                                hover={'#E98888'}
                                onClick={deleteHandler}>
                                Delete
                            </Button>
                            }
                            <div>
                                <Button
                                    disabled={isLoading && true}
                                    type='button'
                                    onClick={() => history.push('/')}
                                    className='cancel-button'
                                    backgroundColor={'#3A4374'}
                                    hover={'#656EA3'}>
                                    Cancel
                                </Button>
                                <Button
                                    disabled={isLoading && true}
                                    className='submit-btn'
                                    type='submit'
                                    marginRight={'0'}>
                                    {!product_response ? 'Add Feedback' : 'Save Changes'}
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </FormWrapper>
    );
};

export const H1Form = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

export const FormWrapper = styled.div`
  padding: 92px 450px;

  .form {
    margin-top: 70px;
    padding: 52px 42px;
    width: 100%;
    min-height: 657px;
    background: #ffff;
    border-radius: 10px;
    position: relative;

    .image {
      background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
      position: absolute;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      top: -28px;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        height: 16px;
        width: 16px;
        padding: -8px;
      }
    }
  }


  .buttons {
    width: 100%;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1400px) {
    padding: 80px 300px;
  }

  @media (max-width: 1100px) {
    padding: 80px 200px;
  }

  @media (max-width: 900px) {
    padding: 56px 114px;
  }

  @media (max-width: 600px) {
    padding: 24px 34px;

    .form {
      padding: 44px 24px;

      .image {
        height: 40px;
        width: 40px;
        top: -20px;
      }
    }

    .buttons {
      flex-direction: column;
      flex-flow: column-reverse;
      height: auto;
      justify-content: space-between;
      margin-top: 0;

      .cancel-button,
      .delete-btn {
        margin-right: 0;
      }

      .submit-btn,
      .cancel-button {
        margin-bottom: 16px;
      }

      > div {
        display: flex;
        flex-direction: column;
        flex-flow: column-reverse;
        margin-top: 40px;
      }
    }
  }
`

export default NewFeedbackPage;