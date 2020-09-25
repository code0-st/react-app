import React, {Suspense} from 'react';
/* LIBRARIES */
import Header from './components/Header/header';
import { Route, withRouter } from 'react-router-dom';
/* COMPONENTS */
import SidebarContainer from './components/Sidebar/SidebarContainer';
/* STYLE */
import './App.css';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader';

const AuthorsContainer = React.lazy(() => import('./components/Authors/AuthorsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            <Route path="/profile/:userID?" render={() => <Suspense fallback={<Preloader/>}
                                                                    children={<ProfileContainer/>} /> }/>
        <Route path="/authors" render={() => <Suspense fallback={<Preloader/>}
                                                       children={<AuthorsContainer />} />} />
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
