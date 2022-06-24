// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//-------------------------------------------------------------------------------------------------------------------------------------------------------//

var passlen;

function generatePassword() {
  passlength();
}

function passlength() {
  do {
    var valid = false;
    passlen = prompt("Pick a password length between 8 and 128");
    if (isNaN(passlen) === true) {
      alert(passlen + " is not a number");
       valid = false;
    } else if (passlen === null) {
      valid = true;
      return;
    }else if (((Number(passlen) < 8) || (Number(passlen) > 128))){
      alert(passlen + " is not between 8 and 128");
      valid = false;
    }
    else{
      valid = true;
    }
  }
  while (valid === false);
}