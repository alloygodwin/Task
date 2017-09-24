var express = require('express');
var app = express();

app.get('/hello', function(request, response) {

    var id = request.query.id;
    var name =request.query.name;

 response.end("id:"+id+"\nname:"+name);
});

app.listen(2000);
console.log("node express port is http://localhost:2000");
