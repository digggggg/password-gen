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
// generate password function
var passlen;


function generatePassword() {
  passlength();
  characterconfirm();
  passwordRNG();
  return answer.join('');
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------//
//function for validating passlength
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
  return passlen;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------//
// function for character confirmation
function characterconfirm() {
  do {
    var valid = false;
    var lowercase = confirm("Do you want lowercase characters?")
    var uppercase = confirm("Do you want uppercase characters?")
    var numeric = confirm("Do you want numeric characters?")
    var special = confirm("Do you want special characters?")
    if ((lowercase === false) && (uppercase === false) && (numeric === false) && (special === false)){
      alert("You must select a character type!")
      valid = false;
    }else {
      valid = true;
    }
  }
  while(valid === false);
  var charL = '';
  
  if (lowercase === true){
    charL += lower;
  }

  if (uppercase === true){
    charL += upper;
  }

  if (numeric === true){
    charL += numbers;
  }

  if (special === true){
    charL += specialLetters
  }
  console.log(charL);
 return charListArr = charL.split('');
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------//
// character arrays
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialLetters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//-------------------------------------------------------------------------------------------------------------------------------------------------------//
//characters selected for password
var charList;
var charListArr;
var answer = [];
function passwordRNG() {
  for (var i = 0; i < passlen; i++) {
  var charPicked = Math.floor(Math.random() * charListArr.length);
  answer[i] = charListArr[charPicked]; 
  }
  return answer;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------//