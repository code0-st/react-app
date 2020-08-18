import React from 'react';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header state={props.state.header} />
        <Sidebar state={props.state.sidebar} />
        <div className="content">
          <Content />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
