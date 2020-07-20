import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}


const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.AUTH_START: {

            return {
                ...state,
                loading: true,
                error: null
            }
        }

        case actionTypes.AUTH_SUCCESS: {
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            }
        }
        case actionTypes.AUTH_FAIL: {
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }

        case actionTypes.AUTH_LOGOUT: {

            return {
                ...state,
                userId: null,
                token: null
            }
        }

        case actionTypes.AUTH_STATUS_SET_FALSE: {

            return {
                ...state,
                error: null
            }
        }

        default: return state
    }
}

export default authReducer