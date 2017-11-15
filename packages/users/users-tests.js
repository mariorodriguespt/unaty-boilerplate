// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by users.js.
import { name as packageName } from "meteor/unaty:users";

// Write your tests here!
// Here is an example.
Tinytest.add('users - example', function (test) {
  test.equal(packageName, "users");
});
