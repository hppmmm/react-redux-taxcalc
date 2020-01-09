import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import appReducer from "./reducers/appReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialState = {
  price: ""
};

const store = createStore(appReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
