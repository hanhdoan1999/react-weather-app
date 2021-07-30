import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { Provider } from "react-redux";


import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/rootSaga'
import myReducer from './reducers/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  myReducer,
  applyMiddleware(sagaMiddleware)
)



ReactDOM.render(
  <Provider store={ store }>
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga)

