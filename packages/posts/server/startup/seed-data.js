const hn = require( 'hacker-news-api' );

Meteor.startup( () => {
    if ( !UN.Posts.Collections.Posts.findOne() && !Meteor.isProduction ) {

        for ( let i = 1; i < 5; i++ ) {
            hn.page( i ).call( async function ( error , data ) {
                if ( error ) {
                    console.error( 'Failed to fetch data from HackerNews.' );
                }
                else {
                    data.hits.forEach( ( item ) => item.title && UN.Posts.Collections.Posts.direct.insert( item ) );
                }
            } );
        }

        /*//If no record is present on the DB, we'll add some data
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

        seedData.forEach( ( item ) => UN.Posts.Collections.Posts.direct.insert( item ) );*/

    }
} );
