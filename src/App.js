import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import decode from 'jwt-decode';
import HomeLayout from './screens/DefaultLayout/DefaultLayout';
import Login from './screens/Auth/Login/Login';
import Register from './screens/Auth/Register/Register';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export let store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
export let store = createStore(allReducers, applyMiddleware(thunk));
const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  try {
    const { exp } = decode(token);
    if (exp < parseInt(new Date().getTime() / 1000)) {
      return false;
    }
  }
  catch (e) {
    return false;
  }
  return true;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" render={props => (
            checkAuth()
              ? <HomeLayout />
              : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )} />
          <Redirect from="/" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
