import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './modules/auth/reducer';
import userReducer from './modules/user';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;