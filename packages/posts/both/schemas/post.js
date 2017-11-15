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

UN.Posts.Collections.Posts.attachSchema( UN.Posts.Schemas.Posts );