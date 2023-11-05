// Assignment Code

// this is setting a variable based off of the item specified in the querySelector. (#generate ID'd button in the HTML)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
// this portion of the code still needs a function named generatePassword 
// with a return value that will be passed on to passwordText
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// this code is saying "when generateBtn is clicked, execute function writePassword"
// generateBtn.addEventListener("click", writePassword);



// Need clickable button that will present password criteria prompt

// This will populate a generic prompt and record answer in console log for testing
 function setCriteriaPrompt() {
  var criteriaAlert = prompt("please select desired criteria");
  alert ("thank you");
  console.log(criteriaAlert)
// need to make this a loop that will run through all of the criteria prompts and record user-response  
 }



// Need selectable list of criteria to include in pw
// 1)need to create global variables for each list type
// a)prompt for lowercase alph
function lowerCasePrompt() {
  prompt("would you like to include lower case letters?")
}
// b)prompt for uppercase alph
function upperCasePrompt() {
  prompt("would you like to include upper case letters?")
}
// c)prompt for numeric
function numericPrompt() {
  prompt("would you like to include numbers?")
}
// d)prompt for symbols/random chars
function symbolsPrompt() {
  prompt("would you like to include symbols? (I.G $,#,@)")
}







// 2) need a way to present list list of creteria (preferrable in toggle format)
// Will have to use multiple prompts
// a)for lowercase alph
var lowerCase = "";
// b)uppercase alph
var upperCase = "";
// c)for numeric
var numeric = 0 ;
// d)for symbols/random chars
var symbols = "";






//Pw length can only be 8 ~ 128 chars
// 1) need a way to control the min/max length of characters generated when user generated the password




// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...
// 1) need a way to take in the user's inputted creteria prefferences, and apply these settings to the-
// algorithm that will be used to populate the random password

// Boolean Toggle Group that will change based off user input. Toggle on = True, Toggle off = false
// Toggles will initially all start as being true, or "on"
var lowerCaseToggle = true
var upperCaseToggle = true
var numericToggle = true
var symbolToggle = true

// general idea of toggle formula that will effect the above toggle variable grouop
// if (userToggle = off) {
//   var upperCaseToggle = false;
// }



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


// When I answer each prompt, input should be validated "please enter correct......"



//After every prompt is answered, pw is generated that matches selected criteria
// 1) loop that takes in all of the previous functions or whatever type of code that handled criteria input-
// and uses it to generate a random pw based off input
 if (generatorCommence = true) {
  // code that runs through the creteria and populates an appropriate return response based on the data
 }
//  based off this return, we need code that will run an algorithm to generate a password accordingly




//When this pw is written, its either displayed in the alert or written to the page
// 1) code that will interact with html/css to relay the generated password into the box section of html-
// containing the "Your Secure Password" text