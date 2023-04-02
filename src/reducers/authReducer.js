import axios from '../services/Api'

export const LOGIN = "auth/LOGIN";
export const RESET = "auth/RESET";
export const GET_DATA = "GET_DATA";
export const LOG_OUT = "LOG_OUT";
const initState = {
    accountDetails: null,
    token: null
};

export const getDataAction = (data) => ({
    type: GET_DATA,
    data
});


export const reset = () => ({
    type: RESET,
});

export const login = (params, meta) => async (dispatch) => {
    try {
        const result = await dispatch({
            type: LOGIN,
            data: await axios.post(`/auth/login`, params)
        });
        meta.onSuccess(result);
    } catch (err) {
        meta.onError(err);
    }
};


export const logout = () => {
    localStorage.removeItem('token');
    return (dispatch) => {
        dispatch({
            type: LOG_OUT,
        });
    }
}

// Main
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action.data?.data?.accessToken);
            return {
                ...state,
                accountDetails: action.data?.data?.user,
                token: action.data?.data?.accessToken
            };
        case RESET:
            return {
                ...initState,
            };
        default:
            return state;
    }
};

export default authReducer;
