import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import { PostContainer } from './components/post/PostsContainer.jsx';


Meteor.startup(() => {
    render(<PostContainer />, document.getElementById('main-app-container'));
});
