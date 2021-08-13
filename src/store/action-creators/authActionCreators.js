import api from "../../api/api";

import { 
    START_LOGIN_FETCHING, 
    SUCCESS_LOGIN_FETCHING, 
    ERROR_LOGIN_FETCHING,
    LOGOUT
} from "../actions/authActions";

export const startLoginFetching = () => ({type: START_LOGIN_FETCHING});
export const successLoginFetching = data => ({type: SUCCESS_LOGIN_FETCHING, payload: data});
export const errorLoginFetching = () => ({type: ERROR_LOGIN_FETCHING});

export const login = (data) => async dispatch => {
    dispatch(startLoginFetching())
    // mock request api with timeout 
    const res = await api('login', data);
    if (res.status === 200) {
        console.log(res);
        dispatch(successLoginFetching(res.data));
    } else {
        dispatch(errorLoginFetching())
        localStorage.removeItem('token');
    }
}
export const register = async (data) => {
    const res = await api('register', data);
    return res;
}

export const logout = () => ({type: LOGOUT})