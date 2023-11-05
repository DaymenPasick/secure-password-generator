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
        upperCasePrompt(); //Will chain and trigger from lower-case toggle to the upper-case toggle
    } else {
        lowerCaseBoolean = false;
        console.log(lowerCaseBoolean);
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
       numericPrompt();
   } else {
       upperCaseBoolean = false;
       console.log(upperCaseBoolean);
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
   if (numericInput === 'y' || upperCaseInput === 'Y' ) {
       numericBoolean = true;
       console.log(numericBoolean);
   } else {
       numericBoolean = false;
       console.log(numericBoolean);
   }

   }

//End of functionality prompting user input for number inclusivity -------------------------------------------------------
 
 

  function numericPrompt() {
    prompt("would you like to include numbers?")
  }
  
  function symbolsPrompt() {
    prompt("would you like to include symbols? (I.G $,#,@)")
  }




// Need clickable button that will present password criteria prompt --------------------------------------------------------------------------
// This will populate a generic prompt and record answer in console log for testing
//  function userCriteriaPrompt() {
//   var inputCriteria = prompt("please select desired criteria");
//   alert ("thank you");
//   if (inputCriteria === 'y' || inputCriteria === 'Y' || inputCriteria === 'n' || inputCriteria === 'N') {
//     console.log ("woop woop");
//   } else {
//     console.log("please try again")
//   }
// }
// need to make this a loop that will run through all of the criteria prompts and record user-response  

console.log("log tester");









//Pw length can only be 8 ~ 128 chars --------------------------------------------------------------------------
// 1) need a way to control the min/max length of characters generated when user generated the password

// Toggle to confirm which types of characters can be included: upper/lowercase, numeric, special...
// 1) need a way to take in the user's inputted creteria prefferences, and apply these settings to the-
// algorithm that will be used to populate the random password



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


// When I answer each prompt, input should be validated "please enter correct......" --------------------------------------------------------------------------

// if (inputCriteria === 'y' || inputCriteria === 'Y' inputCriteria === 'n' inputCriteria === 'N') {
//     console.log ("woop woop");
// }



//After every prompt is answered, pw is generated that matches selected criteria --------------------------------------------------------------------------
// 1) loop that takes in all of the previous functions or whatever type of code that handled criteria input-
// and uses it to generate a random pw based off input
 if (generatorCommence = true) {
  // code that runs through the creteria and populates an appropriate return response based on the data
 }
//  based off this return, we need code that will run an algorithm to generate a password accordingly




//When this pw is written, its either displayed in the alert or written to the page--------------------------------------------------------------------------

// use the above given code in the starter code to facilitate this :)