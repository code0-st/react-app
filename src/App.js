import React from 'react';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AuthorsContainer from './components/Authors/AuthorsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header state={props.state.header} />
        <Sidebar state={props.state.sidebar} />
        <div className="app-content">
          <Route path="/me" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/authors" render={() => <AuthorsContainer />} />
          {/* TODO: create feedPage and authorsPage */}
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
