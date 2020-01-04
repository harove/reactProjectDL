import {
    RECIPE_DELETE_START,
    RECIPE_DELETE_OK,
    RECIPE_DELETE_NOK,
    RECIPE_DELETE_VOID,
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
        case RECIPE_DELETE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            };
        case RECIPE_DELETE_VOID:
            return {
                ...prevState,
                data: {},
            };
        case RECIPE_DELETE_OK:
            const deletedId = action.payload
            debugger
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case RECIPE_DELETE_NOK:
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