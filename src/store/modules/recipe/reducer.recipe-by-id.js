import {
    RECIPE_FIND_BY_ID_START,
    RECIPE_FIND_BY_ID_OK,
    RECIPE_FIND_BY_ID_NOK,
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
        case RECIPE_FIND_BY_ID_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            };
        case RECIPE_FIND_BY_ID_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case RECIPE_FIND_BY_ID_NOK:
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