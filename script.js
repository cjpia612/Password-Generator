// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaPw = 
  "special": ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","="]
  "uppers":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
            "P","Q","R","S","T","U","V","W","X","Y","Z"]
  "lowers":["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
            "p","q","r","s","t","u","v","w","x","y","z"]
  "numbers":["0","1","2","3","4","5","6","7","8","9"]
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  parseInt(prompt("Choose length of password between 8-128 characters."));
});

// var charAmount = prompt ("Choose length of password between 8-128 characters.");


// var charAmount = []
// if (generate) {
//     prompt( "Do you want lower case letters?")
// }
// // Loop 10 times
// for (var i = 0; i < 10; i++) {
//     // Generate a random number between 1 and 10
//     // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
//     var num = Math.floor(Math.random() * 10) + 1;
