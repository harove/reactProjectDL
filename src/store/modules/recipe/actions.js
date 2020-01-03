import { findAll, findById, save } from '../../../client/post.client';

import {
    RECIPE_SAVE_NOK,
    RECIPE_SAVE_OK,
    RECIPE_SAVE_START,
    RECIPE_FIND_ALL_NOK,
    RECIPE_FIND_ALL_OK,
    RECIPE_FIND_ALL_START,
    RECIPE_FIND_BY_ID_START,
    RECIPE_FIND_BY_ID_OK,
    RECIPE_FIND_BY_ID_NOK,
} from './const';

const findAllStartActionCreator = () => ({
    type: RECIPE_FIND_ALL_START,
    payload: null,
});

const findAllOkActionCreator = (data) => ({
    type: RECIPE_FIND_ALL_OK,
    payload: data,
});

const findAllNokActionCreator = (errorMessage) => ({
    type: RECIPE_FIND_ALL_NOK,
    payload: errorMessage,
});



const descriptionToObj = (obj) => {

    if(obj === null) return [];
    try {
        return JSON.parse(obj);
    } catch (e) {
        // return obj
        return []
    }
}

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
                 
                    const nl = response.data.map(item => {
                        
                        const desc = descriptionToObj(item.description);
    
                        return ({
                            ...item,
                            description: desc,
                        });
                    })
                
                    dispatch(findAllOkActionCreator(nl))
                }
            });
    }
}

// find by id
const findByIdStartActionCreator = () => ({
    type: RECIPE_FIND_BY_ID_START,
    payload: null,
});

const findByIdOkActionCreator = (data) => ({
    type: RECIPE_FIND_BY_ID_OK,
    payload: data,
});

const findByIdNokActionCreator = (errorMessage) => ({
    type: RECIPE_FIND_BY_ID_NOK,
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
    type: RECIPE_SAVE_START,
    payload: null,
});

const saveOkActionCreator = (data) => ({
    type: RECIPE_SAVE_OK,
    payload: data,
});

const saveNokActionCreator = (errorMessage) => ({
    type: RECIPE_SAVE_NOK,
    payload: errorMessage,
});

export const saveAsyncActionCreator = (recipe) => {
    return (dispatch, getStore) => {
        dispatch(saveStartActionCreator());
        save(recipe)
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