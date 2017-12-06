import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import PostsContainer from './components/post/PostsContainer.jsx';
import ApplicationContainer from './ApplicationContainer';
import PostItem from './components/post/item/PostItem.jsx';

const browserHistory = createBrowserHistory();

const renderRoutes = () => (
    <ApplicationContainer>
        <Router history={ browserHistory }>
            <div>
                <Route exact path="/" component={PostsContainer} />
            </div>
        </Router>
    </ApplicationContainer>
);

Meteor.startup(() => {
    render( renderRoutes() , document.getElementById('app'));
});