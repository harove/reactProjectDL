import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './modules/auth/reducer';
import userReducer from './modules/user';
import recipeReducer from './modules/recipe';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    recipe: recipeReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;