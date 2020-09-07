import React from 'react';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AuthorsContainer from './components/Authors/AuthorsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header state={props.state.header} />
        <Sidebar state={props.state.sidebar} />
        <div className="app-content">
          <Route path="/id/:userID" render={() => <ProfileContainer />} />
          <Route path="/authors" render={() => <AuthorsContainer />} />
          {/* TODO: create feedPage */}
        </div>
      </div >
    </BrowserRouter>
  );
} 

export default App;
