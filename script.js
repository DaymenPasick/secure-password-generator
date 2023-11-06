
// this is setting a variable based off of the item specified in the querySelector. (#generate ID'd button in the HTML)
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// this code is saying "when generateBtn is clicked, execute function writePassword"
generateBtn.addEventListener("click", writePassword);


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

//will set lowerCaseBoolean to true/false depending on user response to lowerCasePrompt
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

//will set lowerCaseBoolean to true/false depending on response to upperCasePrompt
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

//will set numberBoolean to true/false depending on response to numberPrompt
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
    
    symbolInput = prompt("would you like to include symbols?")
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

//will set numberBoolean to true/false depending on response to symbol prompt
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



// Function that will check to see if at least one criteria was selected (at least one boolean is true)
// If not, it should pass the user back to initial criteria prompt
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
  passwordGenerator();
  // function that will take alter password criteria based off criteria booleans
}


// function to accept all the previous user-input and use it as criteria to create a password --------------------------
function passwordGenerator () {
  let pass = '';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerCase = 'abcdefhijklmnopqrstuvwxyz';
  let symbol = '*&%$#@!?.'
  let number = '123456789';

  // these if statements will "toggle" the above criterias based on the user input into the prompt
  if (!lowerCaseBoolean) {
    lowerCase = null;
  }
  if (!upperCaseBoolean) {
    upperCase = null;
  }
  if (!symbolBoolean) {
    symbol = null;
  }
  if (!numericBoolean) {
    number = null;
  }

    // this part should generate the numeric portion of the passwords
    for (let i = 8; i <= 128 && i >= 8; i++) { //this line will allow password to be ranging from 8 ~ 128
       let char = Math.floor(Math.random()*(lowerCase+upperCase+symbol+number).length + 1);
        //The above and below code will combine our internal variables to create characters for the generator to choose
       pass += (lowerCase+upperCase+symbol+number).charAt(char);
    }
    return pass; //returns the generated password value back to "pass" variable
}

// this portion of code writes out the password using the passWordGenerator() ---------------------------
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
