// Declare all arrays that will be used
var special = ["~!,@#$%^&*()-_+="];
var uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowers = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var pwFinal = "";  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Starting all processes from the click event on the button
generateBtn.addEventListener("click", 
function(){
 var pwLength = prompt("Choose length of password between 8-128 characters.");
 if (pwLength < 8 || pwLength > 128) {
    alert("Invalid input. Please refresh page and start again");
 } else {
   confirm("Please choose criteria from the following pop-ups.");
 }

//  Creating all the confirms to determine criteria
 var confirmUppers = confirm ("Do you want uppercase letters to be included?")
 var confirmLowers = confirm ("Do you want lowercase letters to be included?");
 var confirmSpecial = confirm("Do you want special characters to be included? ");
 var confirmNumbers = confirm ("Do you want numbers to be included?");

 //  Start combining the results into values
 // Declare new empty array to contain all the pushed values
 var pwCriteria = [];
 if (confirmUppers){
   pwCriteria.push(uppers);
 }
 if(confirmLowers){
   pwCriteria.push(lowers);
 }
 if(confirmSpecial){
   pwCriteria.push(special);
 }
 if(confirmNumbers){
   pwCriteria.push(numbers);
 }
 if(!confirmUppers && !confirmLowers && !confirmSpecial && !confirmNumbers){
   alert("Invalid. You must choose AT LEAST one criterion. Please refresh & start again.");
 }
 
 // Declare new variable to join all the values in array into one string
 var joined = pwCriteria.join("");

 // For loop will execute to generate the randomized password. 
 for (var i = 0, n = joined.length; i < pwLength; i++) {
    pwFinal += joined.charAt(Math.floor(Math.random() * n));
 }
 alert(`Here is your unique password! ${pwFinal}`);
alert("To generate another new password, please refresh page!")
});
 
