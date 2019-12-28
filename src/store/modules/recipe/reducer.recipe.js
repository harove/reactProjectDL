import {
    RECIPE_FIND_ALL_START,
    RECIPE_FIND_ALL_OK,
    RECIPE_FIND_ALL_NOK,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case RECIPE_FIND_ALL_START:
            return {
                ...prevState,
                loading: true,
            };
        case RECIPE_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case RECIPE_FIND_ALL_NOK:
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