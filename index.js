/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validation_form() {
  var x = document.forms["login1"]["uname"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }
}
function validate_cre() {
  var username = document.forms["login1"]["uname"].value;
  var password = document.forms["login1"]["psw"].value;
  document.write(username);
  if (username === "user1" && password === "user1") {
    // Check browser support
   
    window.location.replace("main.html");
     if (typeof (Storage) !== "undefined") {
      // Store
      sessionStorage.setItem("username",username);
      // Retrieve
      document.getElementById("self").innerHTML = sessionStorage.getItem("username");
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }
  else {
    window.location.replace("index.html");
  }
}

function validate_reg(){
     var password_r = document.forms["registration"]["psw"].value;
      var repassword_r = document.forms["registration"]["rpsw"].value;
      if(password_r!==repassword_r)
      {
          alert("password and reenter password should be same");
      }
}
