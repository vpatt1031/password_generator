//Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//properties for passwordText variable
var passwordText = {
    lowercase: "abcdefghijklmnoqrstuvwyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUV",
    numbers: 0123456789,
    specials: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //call the function
  passwordText.writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}

console.log( password_generator() );
