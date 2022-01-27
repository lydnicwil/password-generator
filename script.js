// Assignment Code
var generateBtn = document.querySelector("#generate");
var LengthRangeEl = document.querySelector('#length-range');
var LengthEl = document.querySelector('#length-label');
var symbolsCheckboxEl = document.querySelector('#allow-symbols');
var lowercaseCheckboxEl = document.querySelector('#allow-lowercase');
var uppercaseCheckboxEl = document.querySelector('#allow-uppercase');
var numbersCheckboxEl = document.querySelector('#allow-numbers');

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()-_+=~`;:',<>/?";

LengthRangeEl.addEventListener("mousemove", pwLengthModified);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  password = "";
  var possibleChars = "";

  if(symbolsCheckboxEl.checked) {
    possibleChars += symbols;
  }
  if(lowercaseCheckboxEl.checked) {
    possibleChars += lowercase;
  }
  if(uppercaseCheckboxEl.checked) {
    possibleChars += uppercase;
  }
  if(numbersCheckboxEl.checked) {
    possibleChars += numbers;
  }

  for (let i=0; i<LengthRangeEl.value; i++){
    password += allowableCharacters.charAt(Math.floor(Math.random() * allowableCharacters.length));
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
