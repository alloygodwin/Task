var express = require('express');
var app = express();

app.get('/', function(request, res) {

  var name = request.query.name;
  var num = request.query.number;
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/users";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = {
      name: name,
      number: number
    };
    db.collection("dat").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document has been inserted");
    db.collection("data").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      });
    });
  });
  res.end("Successfully inserted into db");
});
app.listen(1000);
console.log("Success 1000 port");
