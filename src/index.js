import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';

let rerenderDom = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App state={store.getState()} />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}

rerenderDom();

window.store = store;

store.subscribe(rerenderDom);