import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';

let rerenderDom = () => {
  ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
}

rerenderDom();

store.subscribe(rerenderDom);



