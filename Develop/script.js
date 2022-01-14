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
generateBtn.addEventListener("click", writePassword);