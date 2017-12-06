import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

/**
 * This is a root container that contains everything.
 *
 * You use this container to handle authentication, so it will only render the components if a user is logged in
 * No need to check for Meteor.user() everywhere, using the context will be beneficial.
 */
export default class mete extends React.Component{
    constructor( props ){
        super( props );

        this.setState({
            language : 'en',
            currentUser : "fasdfdsfer34erg",
            organization : {
                _id : "asdasd",
                domain : "adasdasd"
            }
        })
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}