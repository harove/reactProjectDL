import {
    USER_SAVE_START,
    USER_SAVE_OK,
    USER_SAVE_NOK,
    USER_SAVE_VOID,
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
        case USER_SAVE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            };
        case USER_SAVE_VOID:
            return {
                ...prevState,
                data: {},
            };
        case USER_SAVE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case USER_SAVE_NOK:
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