export const auth_reducer = (state, action) => {
    if (action.type === 'SET_TOKEN') {
        return {
            ...state,
            token: action.payload,
            isAuthenticated: true
        }
    }

    if (action.type === 'LOGOUT_USER') {
        return {
            ...state,
            token: '',
            isAuthenticated: false
        }
    }

    if (action.type === 'USER_IS_AUTHENTICATED') {
        return {
            ...state,
            isAuthenticated: true
        }
    }
};