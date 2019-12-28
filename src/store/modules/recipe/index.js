import { combineReducers } from 'redux';
import recipesReducer from './reducer.recipes';
import recipeByIdReducer from './reducer.recipe-by-id';
import recipeSaveReducer from './reducer.recipe-save';

const recipeReducer = combineReducers({
    recipes: recipesReducer,
    recipeById: recipeByIdReducer,
    recipeSave: recipeSaveReducer,
});

export default recipeReducer;
