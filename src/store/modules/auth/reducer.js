import {
    AUTH_LOGIN_NOK,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_START,
    AUTH_LOGOUT,
} from './const';
import parseJwt from '../../../utils/parseJwt';

const ls = window.localStorage;

const initialState = {
    isLogin: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ls.getItem('token'),
    token: ls.getItem('token') ? ls.getItem('token') : '',
    loading: false,
    errorMessage: '',
    error: null,
    success: null,
    jwt: ls.getItem('token') ? parseJwt(ls.getItem('token')) : {},
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_NOK:
            return {
                isLogin: false,
                token: '',
                success: false,
                error: true,
                errorMessage: action.payload,
                loading: false,
            };
        case AUTH_LOGIN_OK:
            ls.setItem('token', action.payload);
            return {
                ...prevState,
                isLogin: true,
                token: action.payload,
                success: true,
                error: false,
                loading: false,
                jwt: parseJwt(action.payload),
            };
        case AUTH_LOGIN_START:
            return {
                ...prevState,
                isLogin: false,
                success: false,
                error: false,
                loading: true,
            };
        case AUTH_LOGOUT:
            ls.removeItem('token');
            return {
                ...prevState,
                isLogin: false,
                token: '',
            };
        default:
            return prevState;
    }
};

export default reducer;