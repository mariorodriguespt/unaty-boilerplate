import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/meteor-react-data';

import PostItem from './item/PostItem.jsx';


class PostsContainer extends Component {
    renderTasks(){
        return this.props.posts.map( ( item ) => (
            <PostItem/>
        ))
    }

    render(){
        return (
            <div>
                <ul>
                    { this.renderTasks() }
                </ul>
            </div>
        )
    }
}


export default withTracker( () => {
    const postSubscriptionHandler = Meteor.subscribe( 'UN.Posts.Publications.allPosts' );

    return {
       isReady : postSubscriptionHandler.isReady(),
       posts   : UN.Posts.Collections.Posts.find().fetch()
    };
} , PostsContainer);