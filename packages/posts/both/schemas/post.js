const postSchema = new SimpleSchema({

    title : {
        type : String
    },

    authorID : {
        type : String
    },

    createdAt : {
        type : Date,
        optional: true
    }

});

UN.Posts.Schemas.Posts = postSchema;

//Attach to collection with collection2

/*
    Note: The schema was disabled to include Hacker news data
 */

UN.Posts.Collections.Posts.attachSchema( UN.Posts.Schemas.Posts );