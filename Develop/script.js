<<<<<<< HEAD
// passwordOptions contains all necessary string data needed to generate the password
const passwordOptions = {
  num: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

// Executes when button is clicked
let generatePassword = function() {

  // initial state for password information
  let passInfo = "";

  // ask user for the length of their password
  let characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters");

  // If the character length doesn't match requirements, alert the user
  if (characterAmount >= 8 && characterAmount < 129) {

    // ask if user wants to include integers
    let getInteger = window.confirm("Would you like to include NUMBERS?");

    // if user wants to include numbers
    if (getInteger) {
      // add numerical characters to password data 
      passInfo = passInfo + passwordOptions.num;
    };

    // ask if user wants to include special characters
    let getSpecialCharacters = window.confirm("Would you like to include SPECIAL characters?");

    // if user wants to include special characters 
    if (getSpecialCharacters) {
      // add special characters to password data
      passInfo = passInfo + passwordOptions.specialChar;
    };

    // ask if user wants to include lowercase characters
    let getLowerCase = window.confirm("Would you like to include LOWERCASE characters?");

    // if user wants to include lowercase characters
    if (getLowerCase) {
      // add lowercase characters to password data
      passInfo = passInfo + passwordOptions.lowerCase;
    };

    // ask if user wants to include uppercase characters
    let getUpperCase = window.confirm("Would you like to include UPPERCASE characters?");

    // if user wants to include uppercase characters
    if (getUpperCase) {
      // add uppercase characters to password data 
      passInfo = passInfo + passwordOptions.upperCase;
    };

    // ensure user chooses at least one option
    if (getInteger !=true && getSpecialCharacters !=true && getLowerCase !=true && getUpperCase !=true) {
      // notify user needs to select at least one option
      window.alert("You need to select at least one option, please try again!");
      // return user back to their questions
      return generatePassword();
    };

    // randomPassword is an empty string that the for loop will pass information in
    let randomPassword = "";

    // for loop grabs characterAmount to use
    for (let i = 0; i < characterAmount; i++) {
      //passInfo connects to charAt that uses both Math.floor and random to take the length of passInfo and randomize the results
      randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
    };

    // return password results
    return randomPassword;
  }
  // if user's response is invalid
  else {
    // alert user
    window.alert("You need to provide a valid length!");
    // return user back to their questions
    return generatePassword();
  }
};

// References to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Take the password data from generatePassword(); and store it into a variable
  let password = generatePassword();
  // passwordText contains data that's connected to the css file
  let passwordText = document.querySelector("#password");

  // The data within the password variable is then stored into passwordText.value, so the stringed data can be displayed
  passwordText.value = password;
}

// The event listener looks for a click to then look at the function writePassword
=======
//First: Execute a click event that fires up the prompts NOTE: REMEMBER TO INTERACT WITH PROMPT EVERY CHANGE
//Second: User MUST choose a length of 8 - 128 characters for the password
//Third: Create a series of  if prompts that execute after one another, if invalid option given return the user
//Fourth: Find a method to accept user inputs for finale
//Fifth: Create a function, likely math.(something) to randomize and generate password

//REFERENCE THESE OPTIONS FURTHER DOWN THE CODE
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// 1234567890
// !@#$%&'()*+,^-./:;<=>?[]_`{~}|

//GLOBAL VARIABLES

// The global variables go in this order -> lowercase letters, capital letters, numbers, special characters, userChoices, randomPassword
var lowerAns = false;
var capitalAns = false;
var numbersAns = false;
var specialAns = false;
var userChoices = "";
var randomPassword;

// These global variables will cover our characters/numbers
var lower = "abcdefghijklmnopqrstuvwxyz";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="1234567890";
var specialChar = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";


// Executes when the red button is clicked, finally realized to plug in generatePassword
function generatePassword() {

  // set variables to start values 
  var lowerAns = false;
  var capitalAns = false;
  var numbersAns = false;
  var specialAns = false;
  var userChoices = "";

  // Asking user for the length of the password
  var characterlength = window.prompt("Enter amount of characters for password, MUST BE 8 and NO MORE than 128 characters!");

  // If the character length doesn't match requirements, alert the user
  if (characterlength >= 8 && characterlength < 129) {
    specialAns = window.confirm("Do you want to add special characters");
  }
  
  // If the character length doesn't match requirements, alert the user 
  else {
    window.alert("You need to provide a valid length! Please try again");
    return
  }
  
  // If user wants special characters, add them to userChoices
  if (specialAns) {
    specialAns = true;
    userChoices = userChoices + specialChar;
  }

  //Ask user if they want to use lowercase letters
  lowerAns = window.confirm("Do you need lowercase letters?");

  // if user confirms lowercase letters, add to userChoices
  if (lowerAns) {
    lowerAns = true;
    userChoices = userChoices + lower;
  }

  //Ask user if they want to use capital letters
  capitalAns = window.confirm("Do you need uppercase letters?");

  // if user confirms capital letters, add to userChoices
  if (capitalAns) {
    capitalAns = true;
    userChoices = userChoices + capital;
  }

  //Ask user if they want to use numbers
  numbersAns = window.confirm("Do you want to add numbers?");

  // if user confirms numbers, add to userChoices
  if (numbersAns) {
    numbersAns = true;
    userChoices = userChoices + numbers;
  }
  // If the user does not pick a password selector request they use at least one valid selector and return them to selector questions
  if (specialAns !=true && numbersAns !=true && capitalAns !=true && lowerAns !=true) {
    window.alert("You must select at least one option! Please try again.");
    generatePassword();
  }

  // This sets randomPassword to an empty string
  var randomPassword = ""

  // for loop to select a list of characters that are randomly chosen from the userChoices character preferences AND as long characterlength
  
  // Remember: i starts at 0, i specified tries to match length, i++ adds
  for (var i = 0; i < characterlength; i++) {
     var random = Math.floor(Math.random() * userChoices.length);

     randomPassword = randomPassword + userChoices.charAt(random);
   }

   // Display random password
   return randomPassword;
};   
  
// Get references to the #generate element (We'll likely be ignoring this)
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
 
  //we'll likely use this.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
>>>>>>> af7b332907a7755d3194d9982eab7151faa4daf5
generateBtn.addEventListener("click", writePassword);