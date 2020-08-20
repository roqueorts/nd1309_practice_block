"use strict";

/**
 * Importing the Block class
 */
//
var BlockClass = require('./block.js');
/**
 * Creating a block object
 */


var block = new BlockClass.Block("Test Block"); // Generating the block hash

block.generateHash().then(function (result) {
  console.log("Block Hash: ".concat(result.hash));
  console.log("Block: ".concat(JSON.stringify(result)));
})["catch"](function (error) {
  console.log(error);
});
/**
 * Step 3: Run the application in node.js
 * 
 */
// From the terminal: cd into Project folder
// From the terminal: Run node app.js to run the code