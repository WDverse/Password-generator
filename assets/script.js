// Assignment Code
var generateBtn = document.querySelector("#generate");


// function generatePassword() {
//   const passwordLength = window.prompt("How many characters do you want the password to contain?");
//   const acceptSpecialCharacters = confirm("Click OK to confirm including special characters");
//   const acceptNum = confirm("Click OK to confirm including numeric characters");
//   const acceptLower = confirm("Click OK to confirm including lowercase");
//   const acceptUpper = confirm("Click OK to confirm including uppercase");
// };
// var passwordCharacters = {
//   numCharacters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//   specialCharacters: ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "["],
//   lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//   uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
// }

// for (var i = 0; i <= passwordCharacters.length; i++) {

//   if (acceptSpecialCharacters && acceptNum && acceptLower && acceptUpper) {
//     return []
//   }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


