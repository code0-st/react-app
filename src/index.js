import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';


let rerenderDom = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderDom();

store.subscribe(rerenderDom);



