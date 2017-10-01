var cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

app.get('/insert',function(req,res)
{

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/mydb";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myobj = { name: "Godwin", address: "Madurai" };
	  db.collection("customers").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("One document  has been inserted");
	    db.close();
	  });
	}); res.end("Successfully flashed into Database");
})
app.get('/find',function(req,res)
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/mydb";

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		db.collection("customers").findOne({}, function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
		  });
	}); res.end("Successfully found");
})
app.listen(1000, function () {
  console.log('Example app listening on port 1000!')
})
