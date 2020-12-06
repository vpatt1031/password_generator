//Assignment Code
var generateBtn = document.querySelector("#generate");

//Assigned variables for password characters in arrays as strings.

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = `!#$%&'()*+,-./:;<=>?@[\]^_{|}~")`;
var specialCharArr = specialChar.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var bankOfPossibilities= [];
  var promptInput = prompt("How many characters would you like in your password? Enter a number between 8-128");
  if(promptInput <= 7 || promptInput >=129) {
    alert("THAT'S THE WRONG NUMBER!");
    generatePassword();
  }

  var lowerCaseQ = confirm("Do you want to include Lower Case Characters?");
  var UpperCaseQ = confirm("Do you want to include Upper Case Characters?");
  var NumberQ = confirm("Do you want to include Number Characters?");
  var SpecialQ = confirm("Do you want to include Special Characters?");

  if(lowerCaseQ === true){
    bankOfPossibilities = bankOfPossibilities.concat(lowerCaseChar);
  }
  if(UpperCaseQ) {
    bankOfPossibilities = bankOfPossibilities.concat(upperCaseChar);
  }
  if(NumberQ){
    bankOfPossibilities = bankOfPossibilities.concat(numberChar);
  }
  if(SpecialQ){
    bankOfPossibilities = bankOfPossibilities.concat(specialCharArr);
  }

  var randomPass = "";
  for(i=0; i<promptInput; i++) {
    //bankOfPossibilities
    //bankOfPossibilities.length
    //Math.random() gives a random number between 0 and 1
    //Math.floor() rounds whatever parameter we put through down to the nearest integer
    var randomNum = Math.floor(Math.random() * bankOfPossibilities.length);
    var randomChar = bankOfPossibilities[randomNum];
    randomPass += randomChar;
    console.log(randomPass);
  }

  return randomPass
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









