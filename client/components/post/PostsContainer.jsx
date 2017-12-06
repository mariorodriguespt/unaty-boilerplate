import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import PostItem from './item/PostItem.jsx';

import { Container , Segment , Menu , Dropdown , Icon , Feed , Item , Label } from 'semantic-ui-react';

class Posts extends Component {

    static contextTypes = {
        router : PropTypes.object
    }

    constructor( props ) {
        super( props );

        this.renderTasks = this.renderTasks.bind( this );
    }

    renderTasks() {
        return this.props.posts.map( ( item , index ) => (
            <PostItem {...item} key={index}/>
        ) )
    }

    availableLanguages() {
        return [
            {
                key: 'gb' ,
                value: 'gb' ,
                flag: 'gb' ,
                text: 'English'
            },
            {
                key: 'de' ,
                value: 'de' ,
                flag: 'de' ,
                text: 'Deutsch'
            },
            {
                key: 'pt' ,
                value: 'pt' ,
                flag: 'pt' ,
                text: 'Português'
            }
        ];
    }

    render() {
        console.log( this.context );

        return (
            <Container>

                <Menu attached='top'>
                    <Menu.Item key='home' name='home' active={true}/>
                    <Menu.Item key={'messages'} name='messages'/>
                    <Menu.Item key={'friends'} name='friends'/>

                    <Menu.Menu position='right'>
                        <Dropdown placeholder='Select Country' search selection
                                  options={this.availableLanguages()}/>
                    </Menu.Menu>
                </Menu>

                <Segment attached='bottom' loading={!this.props.isReady}>
                    <Item.Group divided>
                        {this.renderTasks()}
                    </Item.Group>
                </Segment>
            </Container>
        )
    }
}


export default PostsContainer = withTracker( () => {
    const postSubscriptionHandler = Meteor.subscribe( 'UN.Posts.Publications.allPosts' );

    return {
        isReady: postSubscriptionHandler.ready() ,
        posts: UN.Posts.Collections.Posts.find().fetch()
    };
} )( Posts );
