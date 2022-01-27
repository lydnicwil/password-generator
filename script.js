// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthRange = document.querySelector('#length-range');
var length = document.querySelector('#length-label');
var symbolsCheckbox = document.querySelector('#allow-symbols');
var lowercaseCheckbox = document.querySelector('#allow-lowercase');
var uppercaseCheckbox = document.querySelector('#allow-uppercase');
var numbersCheckbox = document.querySelector('#allow-numbers');

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=~`;:',<>/?";

length.textContent = "Password Length";
lengthRange.addEventListener("mousemove", newLength);
function newLength() {
  if (length != lengthRange.value) {
    writePassword();
    length = lengthRange.value;
  }
  lengthEl.textContent = "Password Length: " + lengthRange.value;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  password = "";
  var possibleChars = "";

  if(symbolsCheckbox.checked) {
    possibleChars += symbols;
  }
  if(lowercaseCheckbox.checked) {
    possibleChars += lowercase;
  }
  if(uppercaseCheckbox.checked) {
    possibleChars += uppercase;
  }
  if(numbersCheckbox.checked) {
    possibleChars += numbers;
  }

  for (let i=0; i<lengthRange.value; i++){
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

