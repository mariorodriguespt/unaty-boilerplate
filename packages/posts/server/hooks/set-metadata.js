const setMetadata = ( userId , doc ) => {
    doc.createdAt = new Date();
};

UN.Posts.Collections.Posts.before.insert( setMetadata );
