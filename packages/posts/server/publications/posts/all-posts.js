import { Meteor } from 'meteor/meteor';

Meteor.publish( 'UN.Posts.Publications.allPosts' , function (  ) {
    //DON'T DO THIS IN PRODUCTION
    //Every time we fetch data, we need to be sure that the current logged in user has permission
    Meteor._sleepForMs( 5 * 1000 );
    return UN.Posts.Collections.Posts.find();
});
