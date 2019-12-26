import {
    USER_FIND_ALL_START,
    USER_FIND_ALL_OK,
    USER_FIND_ALL_NOK,
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
        case USER_FIND_ALL_START:
            return {
                ...prevState,
                loading: true,
            };
        case USER_FIND_ALL_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case USER_FIND_ALL_NOK:
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