//Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Assigned variables for password characters in arrays as strings.

    var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
    var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"];
    var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;





  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








