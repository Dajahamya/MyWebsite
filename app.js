var username = prompt("Enter your name");

function checkUser(name){
  if(name == "Justino"){
   alert("Welcome to Hell");
  }
else if(name =="Alexis"){
   alert("Welcome to Hell");
}
else if (name == "Dajah"){
   alert("Welcome to Hell");
}
else {
   document.body.innerHTML="<h1>Access Denied</h1>";
}
}
    checkUser(username);
