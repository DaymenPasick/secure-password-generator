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
// 1)Use button that's already present


//2) Need way to present a prompt as a result of clicking the "set password criteria" button



// Need selectable list of criteria to include in pw
// 1)need to create global variables for each list type
// a)for lowercase alph
var lowerCase = "";
// b)for uppercase alph
var upperCase = "";
// c)for numeric
var numeric = 0 ;
// d)for symbols/random chars
var symbols = "";






// 2) need a way to present this list list of creteria (preferrable in toggle format)





//Pw length can only be 8 ~ 128 chars
// 1) need a way to control the min/max length of characters generated when user generated the password




// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...
// 1) need a way to take in the user's inputted creteria prefferences, and apply these settings to the-
// algorithm that will be used to populate the random password



// Minimum of one character type needs to be selected
// 1)some type of code to prevent the ability to generate password if no-character type is set
if (noCharSelection = true) {
  generatorCommence = false; 
}

// 2) a prompt message saying they must select at least one type of character before generation can start
if (generatorCommence = false) {
  // this console.log should be replaced with an actual prompt screen message
  console.log("at least one criteria must be selected");
  // need code to return user to criteria options/toggle interface
}


// When I answer each prompt, input should be validated



//After every prompt is answered, pw is generated that matches selected criteria
// 1) loop that takes in all of the previous functions or whatever type of code that handled criteria input-
// and uses it to generate a random pw based off input




//When this pw is written, its either displayed in the alert or written to the page
// 1) code that will interact with html/css to relay the generated password into the box section of html-
// containing the "Your Secure Password" text