import React from 'react';
/* LIBRARIES */
import Header from './components/Header/header';
import { Route, withRouter } from 'react-router-dom';
/* COMPONENTS */
import AuthorsContainer from './components/Authors/AuthorsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
/* STYLE */
import './App.css';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader';

class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp();
  }

  render = () => {
    if (!this.props.initialized) {
      return <Preloader />
    }  
    return (    
      <div className="app-wrapper">
        <Header state={this.props.state.header} />
        <SidebarContainer />
        <div className="app-content">
        <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
        <Route path="/authors" render={() => <AuthorsContainer />} />
        <Route path="/login" render={() => <Login />} />
        {/* TODO: create feedPage */}
        </div>
      </div >
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
