import React from 'react';
/* LIBRARIES */
import Header from './components/Header/header';
import { BrowserRouter, Route } from 'react-router-dom';
/* COMPONENTS */
import AuthorsContainer from './components/Authors/AuthorsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
/* STYLE */
import './App.css';
import Login from './components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header state={props.state.header} />
        <SidebarContainer />
        <div className="app-content">
          <Route path="/profile/:userID" render={() => <ProfileContainer />} />
          <Route path="/authors" render={() => <AuthorsContainer />} />
          <Route path="/login" render={() => <Login />} />
          {/* TODO: create feedPage */}
        </div>
      </div >
    </BrowserRouter>
  );
} 

export default App;
