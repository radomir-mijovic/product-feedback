import React, {useEffect} from 'react';
import styled from "styled-components";
import HeaderFeedback from "../Components/Header/HeaderFeedback";
import {Button} from "../Components/UI/Button";
import Suggestions from "../Components/Sugestions/Suggestions";
import AddComment from "../Components/Comments/AddComment";
import SuggestionsMobile from "../Components/Sugestions/SuggestionsMobile";
import {useHistory, useParams} from "react-router-dom";
import {useProductFeedbackContext} from "../Components/context/product_feedback_context";
import Comments from "../Components/Comments/Comments";

const FeedbackDetailPage = () => {
    const {id} = useParams()
    const {isLoading, ProductResponse, product_response} = useProductFeedbackContext()
    const {comments} = product_response
    const history = useHistory()

    useEffect(() => {
        ProductResponse(id)
    }, [])

    return (
        <PageWrapper>
            <HeaderFeedback>
                <Button disabled={isLoading && true}
                        onClick={(e) => {
                            e.preventDefault()
                            history.push(`/edit-feedback/${id}`)
                        }}
                        backgroundColor={'#4661E6'}
                        hover={'#7C91F9'}
                        marginRight={'0'}
                >
                    Edit Feedback
                </Button>
            </HeaderFeedback>
            {isLoading ? <h1>Loading</h1> :
                <>
                    <SuggestionsMobile {...product_response} padding={'0'}/>
                    <Suggestions {...product_response} cursor={'unset'} margin={'0'}
                                 width={'100%'}/>
                    <Comments comments={comments}/>
                </>
            }
            <AddComment id={id}/>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  padding: 80px 355px;

  @media (max-width: 1300px) {
    padding: 60px 250px;
  }

  @media (max-width: 1100px) {
    padding: 60px 100px;
  }

  @media (max-width: 800px) {
    padding: 56px 40px;
  }

  @media (max-width: 700px) {
    padding: 24px;
  }
`

export default FeedbackDetailPage;