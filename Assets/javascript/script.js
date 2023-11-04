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
// 1)Need button
// q)maybe set this button next to/replace "Generate Password" with text saying "set password criteria"?
// b)make the current "Generate Password" button grayed out/unclickable untill we've set the criteria with the afore-mentioned button
// c)give a hover/active message over "Generate Password" button that tells the user something like "no criteria set"
//2) Need way to present a prompt as a result of clicking the "set password criteria" button



// Need selectable list of criteria to include in pw
// 1)need to create global variables for each list type
// a)for lowercase alph
// b)for uppercase alph
// c)for numeric
// d)for symbols/random chars

// 2) need a way to present this list list of creteria (preferrable in toggle format)

// 3) need a way to take in the user's inputted creteria prefferences, and apply these settings to the-
// algorithm that will be used to populate the random password



//Pw length can only be 8 ~ 128 chars



// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...




// Minimum of one character type needs to be selected




// When I answer each prompt, input should be validated



//After every prompts are answered, pw is generated that matches selected criteria



//When this pw is written, its either displayed in the alert or written to the page