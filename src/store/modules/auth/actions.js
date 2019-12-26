import { login } from '../../../client/auth.client';

import {
    AUTH_LOGIN_NOK,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_START,
    AUTH_LOGOUT,
} from './const';

const loginStartActionCreator = () => ({
    type: AUTH_LOGIN_START,
    payload: null,
});

const loginOkActionCreator = (token) => ({
    type: AUTH_LOGIN_OK,
    payload: token,
});

const loginNokActionCreator = (errorMessage) => ({
    type: AUTH_LOGIN_NOK,
    payload: errorMessage,
});

export const logoutActionCreator = () => ({
    type: AUTH_LOGOUT,
    payload: null,
});

export const loginAsyncActionCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(loginStartActionCreator());
        login(data)
            .catch(error => {
                dispatch(loginNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(loginNokActionCreator('Error: generico'))
                } else {
                    dispatch(loginOkActionCreator(response.data))
                }
            });
    }
}