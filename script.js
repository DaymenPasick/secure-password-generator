// Assignment Code

// this is setting a variable based off of the item specified in the querySelector. (#generate ID'd button in the HTML)
// var generateBtn = document.querySelector("#generate");

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


//Global variables for each criteria type
var lowerCase = ""
var upperCase = ""
var numeric = 0 
var symbols = ""

// Boolean Toggle Group that will change based off user input
// Criteria will initially all start as being true (meaning user wants to include them in their password)
var lowerCaseBoolean = true
var upperCaseBoolean = true
var numericBoolean = true
var symbolBoolean = true

//Global variable to store user-input for each criteria option
var lowerCaseInput
var upperCaseInput
var numericInput
var symbolInput

//Start of functionality prompting user input for lower-case letters -------------------------------------------------------

// Initial prompt for lower-case letters
function lowerCasePrompt() {
    
     lowerCaseInput = prompt("would you like to include lower case letters?")
    if (lowerCaseInput === 'y' || lowerCaseInput === 'Y' || lowerCaseInput === 'n' || lowerCaseInput === 'N') {
        console.log (lowerCaseInput);
        lowerCaseToggle();
      } else {
        // should prompt user to use correct characters and allow them to retry
        console.log("please try again");
        alert("Must use one of the following: 'y' - 'Y' - 'n' - 'N'. Please try again.");
        lowerCasePrompt(); 
      }
  }

//will set lowerCaseBoolean to true/false depending on user-input
  function lowerCaseToggle () {
    if (lowerCaseInput === 'y' || lowerCaseInput === 'Y' ) {
        lowerCaseBoolean = true;
        console.log(lowerCaseBoolean);
        upperCasePrompt(); //Will chain into upper-case letter prompt
    } else {
        lowerCaseBoolean = false;
        console.log(lowerCaseBoolean);
        upperCasePrompt(); //Will chain into upper-case letter prompt
    }
  }
//End of functionality prompting user input for lower-case letters -------------------------------------------------------




//Start of functionality prompting user input for upper-case letters -------------------------------------------------------

// Initial prompt for upper-case letters
function upperCasePrompt() {
    
    upperCaseInput = prompt("would you like to include upper case letters?")
   if (upperCaseInput === 'y' || upperCaseInput === 'Y' || upperCaseInput === 'n' || upperCaseInput === 'N') {
       console.log (upperCaseInput);
       upperCaseToggle();
     } else {
       // should prompt user to use correct characters and allow them to retry
       console.log("please try again");
       alert("Must use one of the following: 'y' - 'Y' - 'n' - 'N'. Please try again.");
       upperCasePrompt(); 
     }
 }

//will set lowerCaseBoolean to true/false depending on user-input
 function upperCaseToggle () {
   if (upperCaseInput === 'y' || upperCaseInput === 'Y' ) {
       upperCaseBoolean = true;
       console.log(upperCaseBoolean);
       numericPrompt(); //will chain into numeric input prompt
   } else {
       upperCaseBoolean = false;
       console.log(upperCaseBoolean);
       numericPrompt(); //will chain into numeric input prompt
   }

   }

//End of functionality prompting user input for upper-case letters -------------------------------------------------------



//Start of functionality prompting user input for number inclusivity -------------------------------------------------------

// Initial prompt for number inclusivity
function numericPrompt() {
    
    numericInput = prompt("would you like to include numbers?")
   if (numericInput === 'y' || numericInput === 'Y' || numericInput === 'n' || numericInput === 'N') {
       console.log (numericInput);
       numericToggle();
     } else {
       // should prompt user to use correct characters and allow them to retry
       console.log("please try again");
       alert("Must use one of the following: 'y' - 'Y' - 'n' - 'N'. Please try again.");
       numericPrompt(); 
     }
 }

//will set numberBoolean to true/false depending on user-input
 function numericToggle () {
   if (numericInput === 'y' || numericInput === 'Y' ) {
       numericBoolean = true;
       console.log(numericBoolean);
       symbolPrompt(); //will chain into symbol input prompt
   } else {
       numericBoolean = false;
       console.log(numericBoolean);
       symbolPrompt(); //will chain into symbol input prompt
   }

   }

//End of functionality prompting user input for number inclusivity -------------------------------------------------------
 


//Start of functionality prompting user input for symbol inclusivity -------------------------------------------------------

// Initial prompt for symbol inclusivity
function symbolPrompt() {
    
    symbolInput = prompt("would you like to include numbers?")
   if (symbolInput === 'y' || symbolInput === 'Y' || symbolInput === 'n' || symbolInput === 'N') {
       console.log (symbolInput);
       symbolToggle();
     } else {
       // should prompt user to use correct characters and allow them to retry
       console.log("please try again");
       alert("Must use one of the following: 'y' - 'Y' - 'n' - 'N'. Please try again.");
       symbolPrompt(); 
     }
 }

//will set numberBoolean to true/false depending on user-input
 function symbolToggle () {
   if (symbolInput === 'y' || symbolInput === 'Y' ) {
       symbolBoolean = true;
       console.log(numericBoolean);
       criteriaChecker ()
   } else {
       symbolBoolean = false;
       console.log(symbolBoolean);
      //  this should pass code to check selected credentials/verify at least one credential has been selected
      criteriaChecker ()
   }

   }

//End of functionality prompting user input for symbol inclusivity -------------------------------------------------------

console.log("log tester");
 
// Function that will check to see if at least one criteria was selected (at least one boolean is true)
// If not, it should pass the user back to initial criteria prompt
// var generatorCommence = false (may not need this part of the code)

function criteriaChecker () {
if (lowerCaseBoolean || upperCaseBoolean || numericBoolean || symbolBoolean ) {
  // generatorCommence = true;
  readCriteriaBooleans(); //passes to portion of code that will take in true/false criteria based off user-prompt input
} else {
  // generatorCommence = false;
  alert("Must have at least one criteria, please try again");
  // this will send user back to criteria prompt if they didn't select at least one criteria
  lowerCasePrompt()
 }
}


// This function should take in the criteria booleans that we set based off the user's response
// and pass the results onto the actual password generator
function readCriteriaBooleans() {
  alert("well done!");
  // function that will take alter password criteria based off criteria booleans
}


// 1st need to be able to generate a password in general





//Pw length can only be 8 ~ 128 chars --------------------------------------------------------------------------
// 1) need a way to control the min/max length of characters generated when user generated the password

// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...
// 1) need a way to take in the user's inputted creteria prefferences, and apply these settings to the-
// algorithm that will be used to populate the random password





//After every prompt is answered, pw is generated that matches selected criteria --------------------------------------------------------------------------
// 1) loop that takes in all of the previous functions or whatever type of code that handled criteria input-
// and uses it to generate a random pw based off input
 if (generatorCommence = true) {
  // code that runs through the creteria and populates an appropriate return response based on the data
 }
//  based off this return, we need code that will run an algorithm to generate a password accordingly




//When this pw is written, its either displayed in the alert or written to the page--------------------------------------------------------------------------
// use the above given code in the starter code to facilitate this :)