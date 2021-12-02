import React, {useContext, useState, useReducer} from "react";
import axios from "axios";
import {useModalsContext} from "./modals_context";
import {auth_reducer} from "../reducer/auth_reducer";
import {useHistory} from "react-router-dom";

const initialState = {
    token: '',
    isAuthenticated: false
}

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(auth_reducer, initialState)
    const [authModal, setAuthModal] = useState(false)
    const {setIsAlertModal, setIsMsg} = useModalsContext()
    const history = useHistory()

    const authenticateUser = async (values, imageUrl, AUTH_URL) => {
        const {username, password, first_name, last_name} = values
        const fromData = new FormData()
        fromData.append('username', username)
        fromData.append('password', password)
        fromData.append('first_name', first_name)
        fromData.append('last_name', last_name)
        fromData.append('image', imageUrl)

        try {
            const response = await axios.post(AUTH_URL, fromData)
            setAuthModal(false)
            setIsAlertModal(true)
            setIsMsg('Your are logged in now ')
            dispatch({
                type: 'SET_TOKEN',
                payload: response.data.token
            })
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            for (const [key, value] of Object.entries(error.response.data))
                if (value) setIsMsg(value[0])
            setAuthModal(true)
            setIsAlertModal(true)
        }
    }

    const authUserCheck = async () => {
        try {
            await axios.get('https://frontend-mentor-backend.herokuapp.com/api/auth/user/', {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
            dispatch({
                type: 'USER_IS_AUTHENTICATED'
            })
        }
        catch (e) {
            localStorage.removeItem('token')
        }
    }

    const logoutUser = async () => {
        try {
            await axios.post('https://frontend-mentor-backend.herokuapp.com/api/auth/logout/',
                {}, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                }
            )
            dispatch({
                type: 'LOGOUT_USER'
            })
            history.push('/')
            localStorage.removeItem('token')
            setIsMsg('You are logged out')
            setIsAlertModal(true)
        } catch (e) {
            history.push('/')
            setIsMsg('Something went wrong')
            setIsAlertModal(true)
        }
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            authenticateUser,
            logoutUser,
            authUserCheck,
            authModal,
            setAuthModal,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)