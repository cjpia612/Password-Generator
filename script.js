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


function clickButton(){
    var generate = prompt( "Choose length of password between 8-128 characters.");
}
// if{
//     prompt= ("Choose length of password between 8-128 characters.");
// }
// if (generateBtn.addEventListener) {
//     alert ("Choose from the following password criteria.");
// }