function disp()
{
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  alert("Welcome " + name + "\nRoll Number:" + roll);
  var details="Hello "+name+"\n"+roll;
  document.getElementById("demo").innerHTML=details;
}
