var attempt = 3;
var waitTime=5000; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var userid=0;
  userid = document.getElementById("userid").value;

var password = document.getElementById("password").value;
var validPassword='admin';
if ( userid!=0&&password == validPassword){
alert ("Login successfully");
window.location = "proversion.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Login Failed!.You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
function fun(){
document.getElementById("userid").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
}
function fun1(){
document.getElementById("userid").disabled = false;
document.getElementById("password").disabled = false;
document.getElementById("submit").disabled = false;
}
if( attempt == 0){
fun();
alert("wait for "+waitTime/1000+" second.");
var time=setTimeout(fun1,waitTime);
attempt=3;
waitTime=waitTime+3000;
return false;
}
}
}