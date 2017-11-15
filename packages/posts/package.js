Package.describe({
  name: 'unaty:posts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');

  api.use([
      'ecmascript',

      'unaty:base'
  ]);

  api.addFiles([
      'both/namespace.js',

      'both/collections/posts.js',

      'both/schemas/post.js'
  ]);

  api.addFiles([
      'server/publications/posts/all-posts.js',

      'server/methods/mark-as-favorite.js',

      'server/hooks/set-author.js',
      'server/hooks/set-metadata.js'

  ] , 'server' );

});

