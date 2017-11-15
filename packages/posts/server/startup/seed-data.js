Meteor.startup( () => {
    if( !UN.Posts.Collections.Posts.findOne() ){
        //If no record is present on the DB, we'll add some data
        const seedData = [
            {
                title : "Title 1",
                userId : "SomeID"

            },
            {
                title : "Title 2",
                userId : "SomeID"

            },
            {
                title : "Title 3",
                userId : "SomeID"

            },
            {
                title : "Title 4",
                userId : "SomeID"

            }
        ];

        seedData.forEach( ( item ) => UN.Posts.Collections.Posts.direct.insert( item ) );

    }
});
