import { findAll, findById, save } from '../../../client/user.client';

import {
    USER_SAVE_NOK,
    USER_SAVE_OK,
    USER_SAVE_START,
    USER_FIND_ALL_NOK,
    USER_FIND_ALL_OK,
    USER_FIND_ALL_START,
    USER_FIND_BY_ID_START,
    USER_FIND_BY_ID_OK,
    USER_FIND_BY_ID_NOK,
} from './const';

const findAllStartActionCreator = () => ({
    type: USER_FIND_ALL_START,
    payload: null,
});

const findAllOkActionCreator = (data) => ({
    type: USER_FIND_ALL_OK,
    payload: data,
});

const findAllNokActionCreator = (errorMessage) => ({
    type: USER_FIND_ALL_NOK,
    payload: errorMessage,
});

export const findAllAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllStartActionCreator());
        findAll()
            .catch(error => {
                dispatch(findAllNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findAllNokActionCreator('Error: generico'))
                } else {
                    dispatch(findAllOkActionCreator(response.data))
                }
            });
    }
}

// find by id
const findByIdStartActionCreator = () => ({
    type: USER_FIND_BY_ID_START,
    payload: null,
});

const findByIdOkActionCreator = (data) => ({
    type: USER_FIND_BY_ID_OK,
    payload: data,
});

const findByIdNokActionCreator = (errorMessage) => ({
    type: USER_FIND_BY_ID_NOK,
    payload: errorMessage,
});

export const findByIdAsyncActionCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(findByIdStartActionCreator());
        findById(id)
            .catch(error => {
                dispatch(findByIdNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findByIdNokActionCreator('Error: generico'))
                } else {
                    dispatch(findByIdOkActionCreator(response.data))
                }
            });
    }
}

// find by id
const saveStartActionCreator = () => ({
    type: USER_SAVE_START,
    payload: null,
});

const saveOkActionCreator = (data) => ({
    type: USER_SAVE_OK,
    payload: data,
});

const saveNokActionCreator = (errorMessage) => ({
    type: USER_SAVE_NOK,
    payload: errorMessage,
});

export const saveAsyncActionCreator = (user) => {
    return (dispatch, getStore) => {
        dispatch(saveStartActionCreator());
        save(user)
            .catch(error => {
                dispatch(saveNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(saveNokActionCreator('Error: generico'))
                } else {
                    dispatch(saveOkActionCreator(response.data))
                }
            });
    }
}