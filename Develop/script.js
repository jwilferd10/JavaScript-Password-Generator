// These global variables will cover our characters/numbers
var lower = "abcdefghijklmnopqrstuvwxyz";
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="1234567890";
var specialChar = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";

// Executes when the red button is clicked, finally realized to plug in generatePassword
function generatePassword() {

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
generateBtn.addEventListener("click", writePassword);