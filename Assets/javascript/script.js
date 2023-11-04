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



// Need clickable button that will present password criteria prompt



// Need selectable list of criteria to include in pw



//Pw length can only be 8 ~ 128 chars



// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...




// Minimum of one character type needs to be selected




// When I answer each prompt, input should be validated



//After every prompts are answered, pw is generated that matches selected criteria



//When this pw is written, its either displayed in the alert or written to the page