
function parse()
{

  var myObj = JSON.parse('{"name":"Godwin","mobile":8760225679,"address":[{"primaryaddress":"madurai"},{"nativeaddress":"thoothukudi"}],"pets":[{"animal":"dog","name":"jimmy"},{"animal":"cat","name":"tom"}]}');
  document.getElementById("demo").innerHTML = myObj.name +"<br>" +myObj.address[0].primaryaddress;

}
