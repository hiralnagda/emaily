import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {CreateStore, applyMiddleware, createStore} from "redux";

// Development only axios helper
import axios from'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);
