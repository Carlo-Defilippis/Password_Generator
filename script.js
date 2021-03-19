$(document).ready(function () {

  $('.loading').hide()
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  var numbers = "1234567890".split("");
  var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var specialChar = "!#$%&*+<=>?@/[]^_`|~".split("");
  
  console.log(lettersLower);
  
  let howManyChar = 0
  let userLowerLetters = false
  let userUpperLetters = false
  let userNumbers = false
  let userSpecialChar = false

  $('.custom-select').on('click', function() {
    howManyChar = $(this).val();
    console.log(howManyChar)
  })
  // Check is user wants lower case letters
  $('.lowerCase').on('click', function() {
    console.log(userLowerLetters)
    if($('.lowerCase').prop('checked')) {
      userLowerLetters = true
    } else {
      userLowerLetters = false
    }
  })
  // checks if user wants upp case letters
  $('.upperCase').on('click', function() {
    console.log(userLowerLetters)
    if($('.upperCase').prop('checked')) {
      userUpperLetters = true
    } else {
      userUpperLetters = false
    }
  })
  // checks if user wants numbers
  $('.numbers').on('click', function() {
    console.log(userLowerLetters)
    if($('.numbers').prop('checked')) {
      userNumbers = true
    } else {
      userNumbers = false
    }
  })
  // checks if user wants special characters
  $('.specialChar').on('click', function() {
    console.log(userLowerLetters)
    if($('.specialChar').prop('checked')) {
      userSpecialChar = true
    } else {
      userSpecialChar = false
    }
  })
  // User Prompts
  
  
  
  function generatePassword(howMany, letLow, letUp, numb, char) {
    console.log(howManyChar, userLowerLetters, userUpperLetters, userNumbers, userSpecialChar)
    var myArray = [];
    var result = [];
  
    if (letUp === false && letLow === false && numb === false && char === false) {
      alert("Please select at least one character type.");
      return
    } else {
      if (howMany >= 8 && howMany <= 25) {
        if (letLow === true) {
          for (var i = 0; i < lettersLower.length; i++) {
            myArray.push(lettersLower[i]);
          }
        }
        if (letUp === true) {
          for (var i = 0; i < lettersUpper.length; i++) {
            myArray.push(lettersUpper[i]);
          }
        }
        if (numb === true) {
          for (var i = 0; i < numbers.length; i++) {
            myArray.push(numbers[i]);
          }
        }
        if (char === true) {
          for (var i = 0; i < specialChar.length; i++) {
            myArray.push(specialChar[i]);
          }
        }
        for (var i = 0; i < howMany; i++) {
          var randomNum = Math.floor(Math.random() * myArray.length);
          result.push(myArray[randomNum]);
        }
      } else {
        alert("Please enter between 8 and 128 characters!");
        return  
      }
      $(".loading").fadeIn(50).fadeOut(2000)
      return result.join("");
    }
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword(
      howManyChar,
      userLowerLetters,
      userUpperLetters,
      userNumbers,
      userSpecialChar
    );
    var passwordText = document.querySelector("#password");
    if (passwordText.value === '') {
      return
    }
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

})

