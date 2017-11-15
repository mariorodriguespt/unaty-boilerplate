Package.describe({
  name: 'unaty:base',
  version: '0.0.1',
  summary: 'Loads all the external dependencies of Unaty',
  documentation: 'README.md'
});


const core = [
    'ecmascript'
];

//this list is ALPHABETIZED, so double check and make sure you aren't adding the same package twice.
const thirdParty = [
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.8.0',
    'matb33:collection-hooks@0.7.15',
    'dburles:collection-helpers@1.1.0',

    'twbs:bootstrap' //the space above was intentional, write comments and space for context
];

// Meteor complains because the npm packages are not added via `meteor add --save PACKAGE`
// for server side packages it shouldn't be a problem, only for front-end packages
const npmPackages = {
    //react       : '16.1.1', Don't add react here because meteor complains
    //'react-dom' : '16.1.1',
    //'react-addons-pure-render-mixin' : '15.6.2'
};


Package.onUse(function(api) {
    api.versionsFrom('1.6');

    //We're passing the packages to another package that might use functionality
    api.use( core );
    api.imply( core );

    api.use( thirdParty );
    api.imply( thirdParty );

    //NPM dependencies
    Npm.depends( npmPackages );

    //If we don't provide a second argument to `api.addFiles` the declared files will be loaded on the client and server
    api.addFiles([
        'both/namespace.js'
    ]);

    api.export( 'UN' );
});

