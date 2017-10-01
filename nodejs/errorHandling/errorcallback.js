const fs = require('fs');

function nodeCallback(err, data) {
 if (err) {
   console.error('There was an error', err);
   return;
 }
 console.log(data);
}
fs.readFile('notexist.txt', nodeCallback);              //These two text files does not exist
fs.readFile('errorhandling.txt', nodeCallback)