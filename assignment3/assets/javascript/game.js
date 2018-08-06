



   /*  /------- GLOBAL VARIABLES ---------/   */ 


var guessInput = document.getElementById("guessInput").value;
var guessField = document.getElementById("guesses");
var numOfGuesses = document.getElementById("guesses-left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var numOfGuesses = 10;
var wins = 0;
var losses = 0;





/*  /------- FIRST GUESS/GENERATE RANDOM LETTER FUNCTION ---------/   */

document.addEventListener('keydown', function(event) {

    var letters =
        ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
        ,"r","s","t","u","v","w","x","y","z"];
    
    var letter = letters[Math.floor(Math.random()*letters.length)];
    console.log(letter);

    var guessInput = document.getElementById("guessInput").value;
  
  
  updateDisplayGuess(guessInput);
  
});





/*  /------- CONDITIONAL TO SELECTED VALUE ---------/   */

function updateDisplayGuess(guessInput) {
  var letters =
        ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
        ,"r","s","t","u","v","w","x","y","z"];
    
  var letter = letters[Math.floor(Math.random()*letters.length)];
  guessInput.value = "";
  numOfGuesses--;

  if (numOfGuesses === 0 && guessInput) {
    losses--;
    gameOver();
  } else if (guessInput[i] > letter[i]) {
    document.getElementById("lowOrHi").innerHTML = "That is too high. Try again.";
  } else if (guessInput < letter[i]) {
    document.getElementById("lowOrHi").innerHTML = "That is too low. Try again.";
  } else (guessInput === letter[i]) 
    document.getElementById("lowOrHi").innerHTML = "BOOM!";
    wins++;
    gameOver();
  } 





/*  /------- GAME OVER ---------/   */

  function gameOver() {
    guessField.innerHTML = "";
  }


















  

  

  