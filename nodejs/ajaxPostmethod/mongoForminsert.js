var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendfile("form.html");
});

app.post('/hold', function(req, res) {
  var user = req.body.user;         //getting name from link above
  var pass = req.body.password;     //getting password from link above
  console.log("Username :" + user + " \n password :" + pass);
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/users";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = {
      name: user,
      password: pass
    };
    db.collection("data").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("One document has been inserted");

    });
  });
  res.end("Success");
});
app.listen(4000, function() {
  console.log("Example port in 4000");
})
