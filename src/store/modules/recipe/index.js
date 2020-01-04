import { combineReducers } from 'redux';
import recipesReducer from './reducer.recipes';
import recipeByIdReducer from './reducer.recipe-by-id';
import recipeSaveReducer from './reducer.recipe-save';
import recipeDeleteReducer from './reducer.recipe-delete';


const recipeReducer = combineReducers({
    recipes: recipesReducer,
    recipeById: recipeByIdReducer,
    recipeSave: recipeSaveReducer,
    recipeDelete: recipeDeleteReducer,
});

export default recipeReducer;
