exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

var lodash = require('lodash');
var output = lodash.without([1, 2, 3], 1);
console.log(output);
