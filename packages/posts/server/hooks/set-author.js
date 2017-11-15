const setAuthorID = ( userId , doc ) => {
    doc.authorID = userId;
};

UN.Posts.Collections.Posts.before.insert( setAuthorID );
