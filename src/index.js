import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Weather from  './redux/weather';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './redux/root';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Weather, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


