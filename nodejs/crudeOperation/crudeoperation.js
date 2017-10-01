var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MongoDatabase";
app.get('/insertdata', function(request, res) {
  var name = request.query.name;
  var rollno = request.query.rollno;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = {
      name  : name,
      rollno: rollno
    };
    db.collection("record").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 has been record has been inserted");
      db.close();
    });
  });
  res.sendfile("index.html");
});
app.get('/retrive', function(request, res) {
  var name = request.query.name;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = {
      name: name
    };
    db.collection("record").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  res.sendfile("index.html");
});
app.get('/updatedata', function(request, res) {
  var oldname = request.query.oldname;
  var newname = request.query.newname;
  var rollno = request.query.rollno;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var olddata = {
      name: oldname
    };
    var newdata = {
      name  : newname,
      rollno: rollno
    };
    db.collection("record").updateOne(olddata,newdata,function(err, res) {
      if (err) throw err;
      console.log("Updated Successfully");
      db.close();
    });
  });
  res.sendfile("index.html");
});
app.get('/deletedata', function(request, res) {
  var name = request.query.name;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var deldata = {
      name: name
    };
    db.collection("record").remove(deldata, function(err, obj) {
      if (err) throw err;
      console.log("Deleted Successfully");
      db.close();
    });
  });
  res.sendfile("index.html");
});
app.get('/display', function(request, res) {
  var i;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("record").find({}).toArray(function(err, result) {
      if (err) throw err;
      for (i = 0; i < result.length; i++)
        console.log(result[i].name + '\t' + result[i].rollno;
      db.close();
    });
  });
  res.sendfile("index.html");
});
app.listen(4000);
console.log("Node Express is running in 4000 Port");