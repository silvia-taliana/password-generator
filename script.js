// Assignment Code
// global variables, these are available to the entire code (i.e. rather than just one function)
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var pswdLength;
var lowercase;
var uppercase;
var numbers;
var specialCharacters;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  passwordText.value = generatePassword();
}

// Above function runs following function to work out the new password 
function generatePassword() {

  // prompts for user to choose their password criteria 
  pswdLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128");
  lowercase = confirm("Would you like to include lowercase letters?");
  uppercase = confirm("Would you like to include uppercase letters?");
  numbers = confirm("Would you like to include numbers?");
  specialCharacters = confirm("Would you like to include special characters?");

  // invalid password choices, forces user to start choosing again 
  if (pswdLength < 8 || pswdLength > 128) {
    alert("Password length invalid");
    return "password invalid";
  }

  if (!lowercase && !uppercase && !numbers && !specialCharacters) {
    alert("Must select characters");
    return "password invalid";
  }

  // if statements, as the user picks the criteria, the chosen string will add on to 
  // the end of the availableChars string creating one long string
  var availableChars = ""
  if (lowercase) {
    availableChars += "abcdefhijklmnopqrstuvwxyz"
  }

  if (uppercase) {
    availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numbers) {
    availableChars += "0123456789"
  }

  if (specialCharacters) {
    availableChars += "!#$@%^&*()_-+=`~{[}]\|;:',<.>/?"
  }

  // for loop, adds the random variable chosen from the new availableChars string on to the 
  // end of the password string. Keeps adding until the length of the new password string equals 
  // the length of the password length chosen by the user in the prompts at the beginning
  var password = ""
  for (var i = 0; i < pswdLength; i++) {
    var random = Math.floor(Math.random() * availableChars.length);
    password += availableChars[random];
  }
  // returns the new password string to the function, then the new password appears on 
  // the screen for the user
  return password;
}
