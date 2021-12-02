import React, {useContext, useReducer, useState} from "react";
import {product_feedback_reducer} from "../reducer/product_feedback_reducer";
import axios from "axios";
import {useModalsContext} from "./modals_context";
import {useHistory} from "react-router-dom";

const MAIN_URL = 'https://frontend-mentor-backend.herokuapp.com/api/products-feedback-list/'

const initialState = {
    products_feedbacks: [],
    filtered_products_feedbacks: [],
    planned_feedbacks: [],
    in_progress_feedbacks: [],
    live_feedbacks: [],
    product_response: [],
    isLoading: false,
    isError: false,
}

const ProductFeedbackContext = React.createContext()

export const ProductFeedbackProvider = ({children}) => {
    const [state, dispatch] = useReducer(product_feedback_reducer, initialState)
    const {setIsAlertModal, setIsMsg} = useModalsContext()
    const [upVotes, setUpVotes] = useState()
    const history = useHistory()

    const planned_feedbacks = state.products_feedbacks.filter(
        item => item.status === 'Planned'
    ).sort((a, b) => a.up_votes < b.up_votes)
    const in_progress_feedbacks = state.products_feedbacks.filter(
        item => item.status === 'In-Progress'
    ).sort((a, b) => a.up_votes < b.up_votes)
    const live_feedbacks = state.products_feedbacks.filter(
        item => item.status === 'Live'
    ).sort((a, b) => a.up_votes < b.up_votes)

    const ProductFeedbackList = async () => {
        try {
            dispatch({
                type: 'LOADING'
            })
            const response = await axios.get(MAIN_URL)
            dispatch({
                type: 'FETCH_PRODUCTS_FEEDBACKS',
                payload: response.data
            })
        } catch (e) {
            history.push('/')
            setIsMsg('Something went wrong')
            setIsAlertModal(true)
        }

    }

    const ProductResponse = async (id) => {
        dispatch({
            type: 'LOADING'
        })
        try {
            const response = await axios.get(`https://frontend-mentor-backend.herokuapp.com/api/product-update-delete/${id}/`)
            dispatch({
                type: 'FETCH_PRODUCT_RESPONSE',
                payload: response.data
            })
        } catch (e) {
            history.push('/')
            setIsMsg('Something went wrong')
            setIsAlertModal(true)
        }
    }

    const addNewFeedback = async (title, isCategory, description) => {
        try {
            const response = await axios.post(MAIN_URL,
                {
                    title,
                    category: isCategory,
                    up_votes: 0,
                    status: 'Suggestion',
                    description
                }, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
            dispatch({
                type: 'ADD_NEW_FEEDBACK',
                payload: response.data
            })
            history.push('/')
            setIsMsg('Feedback added successfully')
            setIsAlertModal(true)
        } catch (e) {
            setIsAlertModal(true)
        }
    }

    const updateProductFeedback = async (id, title, isCategory, isStatus, description) => {
        try {
            const response = await axios.put(`https://frontend-mentor-backend.herokuapp.com/api/product-update-delete/${id}/`,
                {
                    title,
                    category: isCategory,
                    status: isStatus,
                    description
                }, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
            dispatch({
                type: 'UPDATE_FEEDBACK',
                payload: response.data
            })
            history.push('/')
            setIsMsg('Feedback updated successfully')
            setIsAlertModal(true)
        } catch (e) {
            setIsAlertModal(true)
        }
    }

    const deleteFeedback = async (id) => {
        try {
            const response = await axios.delete(`https://frontend-mentor-backend.herokuapp.com/api/product-update-delete/${id}/`,
                {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
            dispatch({
                type: 'DELETE_FEEDBACK',
                payload: response.data
            })
            history.push('/')
            setIsMsg('Feedback deleted')
            setIsAlertModal(true)
        } catch (e) {
            setIsAlertModal(true)
        }
    }

    const updateUpVotes = async (id, newUpVote) => {
        try {
            const response = await axios.patch(`https://frontend-mentor-backend.herokuapp.com/api/product-update-delete/${id}/`,
                {
                    up_votes: newUpVote
                })
            dispatch({
                type: 'ADD_UP_VOTE',
                payload: response.data
            })
            setIsMsg('Thank You for up vote :)')
            setIsAlertModal(true)
        } catch (e) {
            history.push('/')
            setIsMsg('Something went wrong')
            setIsAlertModal(true)
        }
    }

    const filterByCategory = (e) => {
        dispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: e
        })
    }

    const sortBy = (e) => {
        dispatch({
            type: 'SORT_BY',
            payload: e
        })
    }

    const addComment = async (id, commentText) => {
        try {
            const response = await axios.post('https://frontend-mentor-backend.herokuapp.com/api/create-comment/',
                {
                    product: id,
                    text: commentText
                },
                {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
            dispatch({
                type: 'ADD_COMMENT',
                payload: response.data
            })
            setIsMsg('Thank You for the comment')
            setIsAlertModal(true)
        } catch (e) {
            const text_error = e.response.data['text']
            if (text_error) {
                setIsMsg(`Please check Your comment field: ${text_error}`)
            }
            setIsAlertModal(true)
        }
    }

    const addReply = async (id, isReply) => {
        try {
            const response = await axios.post('https://frontend-mentor-backend.herokuapp.com/api/create-reply/',
                {
                    comment: id,
                    reply: isReply
                },
                {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
            dispatch({
                type: 'ADD_REPLY',
                payload: response.data
            })
            setIsMsg('Thank You for replying on this subject')
            setIsAlertModal(true)
        } catch (e) {
            const text_error = e.response.data['reply']
            if (text_error) {
                setIsMsg(`Please check Your reply field: ${text_error}`)
            }
            setIsAlertModal(true)
        }
    }


    return (
        <ProductFeedbackContext.Provider value={{
            ...state,
            ProductFeedbackList,
            ProductResponse,
            addNewFeedback,
            updateProductFeedback,
            updateUpVotes,
            filterByCategory,
            deleteFeedback,
            sortBy,
            addComment,
            addReply,
            upVotes,
            setUpVotes,
            planned_feedbacks,
            in_progress_feedbacks,
            live_feedbacks
        }}>
            {children}
        </ProductFeedbackContext.Provider>
    )
}

export const useProductFeedbackContext = () => useContext(ProductFeedbackContext)