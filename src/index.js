import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';

let rerenderDom = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} />
    </Provider>,
    document.getElementById('root')
  );
}

rerenderDom();

window.store = store;

store.subscribe(rerenderDom);