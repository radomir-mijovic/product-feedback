import React, {useEffect} from 'react';
import NewFeedbackPage from "./NewFeedbackPage";
import {useProductFeedbackContext} from "../Components/context/product_feedback_context";
import {useParams} from "react-router-dom";

const EditFeedbackPage = () => {
    const {
        ProductResponse,
        product_response,
        isLoading
    } = useProductFeedbackContext()
    const {id} = useParams()

    useEffect(() => {
        ProductResponse(id)
    }, [])

    return (
        <>
            {isLoading ?
                <h1>Loading</h1> :
                <NewFeedbackPage product_response={product_response}/>
            }
        </>
    );
};

export default EditFeedbackPage;