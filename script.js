// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "1234567890".split("");
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialChar = "!#$%&*+<=>?@/[]^_`|~".split("");
var blah = [1,2]

// User Prompts
var howManyChar = prompt("How many characters would you like your password to be?");
var userLetters = confirm("Press OK if you want letters in your password.");
var userNumbers = confirm("Press OK if you want numbers in your password.");
var userSpecialChar = confirm("Press OK if you want special characters in your password.");

howManyChar;
console.log(letters.join(""))

function generatePassword(howMany, let, numb, char) {

  if (let === true) {
    console.log("User set letters to True");
  } else {
    console.log("User set letters to False");
  }
  if (numb === true) {
    console.log("User set numbers to True");
  } else {
    console.log("User set numbers to False");
  }
  if (char === true) {
    console.log("User set characters to True");
  } else {
    console.log("User set characters to False");
  }
  console.log("User requested a password with a length of " + howMany);
  return letters.join("")
}



// Write password to the #password input
function writePassword() {

  var password = generatePassword(howManyChar, userLetters, userNumbers, userSpecialChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
