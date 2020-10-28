//First: Execute a click event that fires up the prompts NOTE: REMEMBER TO INTERACT WITH PROMPT EVERY CHANGE
//Second: User MUST choose a length of 8 - 128 characters for the password
//Third: Create a series of prompts that execute after one another, if invalid option given return the user
//Fourth: We need to find a way to accept the info given
//Fifth: Make a password

//REFERENCE THESE OPTIONS FURTHER DOWN THE CODE

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
//1234567890
//!@#$%^&*()_+

//GLOBAL VARIABLES

//Lowercase letters
var lowerAns = false;
// Capital letters
var capitalAns = false;
// Numbers
var numbersAns = false;
// Special Characters
var specialAns = false;
// userChoices remains empty
var userChoices = "";
// randomPassword
var randomPassword;

var lower = "abcdefghijklmnopqrstuvwxyz";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="1234567890";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Executes when the red button is clicked, characters function handles options
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

  //Ask for lowercase
  lowerAns = window.confirm("Do you need lowercase letters?");

  // if user confirms lowercase letters, add to userChoices
  if (lowerAns) {
    lowerAns = true;
    userChoices = userChoices + lower;
  }

  //Ask for capital letters?
  capitalAns = window.confirm("Do you need uppercase letters?");

  // if user confirms capital letters, add to userChoices
  if (capitalAns) {
    capitalAns = true;
    userChoices = userChoices + capital;
  }

  //Ask for numbers?
  numbersAns = window.confirm("Do you want to add numbers?");

  // if user confirms numbers, add to userChoices
  if (numbersAns) {
    numbersAns = true;
    userChoices = userChoices + numbers;
  }
  // If user does not pick a password selector request they use at least one valid selector and return them to selector questions
  if (specialAns !=true && numbersAns !=true && capitalAns !=true && lowerAns !=true) {
    window.alert("You need to pick at least one password selector");
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
  
// Get references to the #generate element (IGNORE)
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
 
  //we'll poke generate password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);