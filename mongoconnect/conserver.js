var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.get('/temp', function(request, response) {

  // Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

app.listen(8000);
console.log("node express app started at http://localhost:8000");

});