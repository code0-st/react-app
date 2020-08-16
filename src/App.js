import React from 'react';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header state={props.state.header} />
      <Sidebar state={props.state.sidebar} />
      <div className="content">
        <Content />
      </div>
    </div >
  );
}

export default App;
