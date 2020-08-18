import React from 'react';
import s from './../../App.css';
import { Route } from 'react-router-dom';
import Profile from './Profile/Profile';

const Content = () => {
    return (
        <Route path="/me" component={Profile} />
        // <Route path="/feed"
        // <Route path="/authors"
        // TODO: create feedPage and authorsPage

    );
}

export default Content;