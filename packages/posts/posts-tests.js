// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by posts.js.
import { name as packageName } from "meteor/unaty:posts";

// Write your tests here!
// Here is an example.
Tinytest.add('posts - example', function (test) {
  test.equal(packageName, "posts");
});
