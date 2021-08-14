import { START_LOGIN_FETCHING, SUCCESS_LOGIN_FETCHING, ERROR_LOGIN_FETCHING, LOGOUT } from "./actions/authActions";

const initialState = {
    isError: false,
    isLoggedIn: false,
    loading: false,
    email: '',
    fullName: '',
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOGIN_FETCHING: {
            return {
                ...state,
                loading: true,
                isError: false,
            }
        }
        case SUCCESS_LOGIN_FETCHING: {
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                email: action.payload.email,
                fullName: action.payload.fullName,
                isError: false,
            }
        }
        case ERROR_LOGIN_FETCHING: {
            return {
                ...state,
                isError: true,
                loading: false,
            }
        }
        case LOGOUT: {
            return {
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
}

export default AuthReducer;