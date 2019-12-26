import { combineReducers } from 'redux';
import usersReducer from './reducer.users';
import userByIdReducer from './reducer.user-by-id';
import userSaveReducer from './reducer.user-save';

const userReducer = combineReducers({
    users: usersReducer,
    userById: userByIdReducer,
    userSave: userSaveReducer,
});

export default userReducer;