var cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

app.get('/getname', function (req, res) {
  var myObj = JSON.parse('{"name":"Godwin","mobile":8760225679,"address":[{"primaryaddress":"madurai"},{"nativeaddress":"thoothukudi"}],"pets":[{"animal":"dog","name":"jimmy"},{"animal":"cat","name":"tom"}]}');
  var x=myObj.name;
  res.send(x)
})
app.get('/getmobile', function (req, res) {
  var myObj = JSON.parse('{"name":"Godwin","mobile":8760225679,"address":[{"primaryaddress":"madurai"},{"nativeaddress":"thoothukudi"}],"pets":[{"animal":"dog","name":"jimmy"},{"animal":"cat","name":"tom"}]}');
  var y=myObj.mobile;
  res.send(y)
})
app.get('/getaddress', function (req, res) {
  var myObj = JSON.parse('{"name":"Godwin","mobile":8760225679,"address":[{"primaryaddress":"madurai"},{"nativeaddress":"thoothukudi"}],"pets":[{"animal":"dog","name":"jimmy"},{"animal":"cat","name":"tom"}]}');
  var z=myObj.address[0].primaryaddress;
  res.send(z)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
