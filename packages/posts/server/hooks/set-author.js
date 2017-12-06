const setAuthorID = ( userId , doc ) => {
    doc.authorId = userId;
};

UN.Posts.Collections.Posts.before.insert( setAuthorID );