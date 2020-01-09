import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/App';
import appReducer from "./reducers/appReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  price: ""
};

const store = createStore(appReducer, initialState);

// Provider: parent component
// App(View): child component
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
