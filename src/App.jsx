import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PrivateRoute } from './components/private-route/PrivateRoute';
import store from './store';

import './App.css';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PrivateHome from './containers/private-home/PrivateHome';
import NotFound from './containers/not-found/NotFound';
import PrivateSaveUser from './containers/private-save-user/PrivateSaveUser';


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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
