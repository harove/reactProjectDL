import {
    RECIPE_SAVE_START,
    RECIPE_SAVE_OK,
    RECIPE_SAVE_NOK,
    RECIPE_SAVE_VOID,
} from './const';

const initialState = {
    data: {},
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case RECIPE_SAVE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            };
        case RECIPE_SAVE_VOID:
            return {
                ...prevState,
                data: {},
            };
        case RECIPE_SAVE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case RECIPE_SAVE_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            };
        default:
            return prevState;
    }
};

export default reducer;