import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoute } from './components/private-route/PrivateRoute';
import store from './store';

import './App.css';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome';
import PrivateSaveUser from './containers/private-save-user/PrivateSaveUser';
import PrivateHomeRecipe from './containers/private-home-recipe/PrivateHomeRecipe';
import PrivateSaveRecipe from './containers/private-save-recipe/PrivateSaveRecipe';
import NotFound from './containers/not-found/NotFound';
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <PrivateRoute exact path="/private/home" component={PrivateHome} />
            <PrivateRoute path="/private/home/user/create" component={PrivateSaveUser} />
            <PrivateRoute exact path="/private/home/recipe" component={PrivateHomeRecipe} />
            <PrivateRoute path="/private/home/recipe/create" component={PrivateSaveRecipe} /> 
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
