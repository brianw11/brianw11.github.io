// document.addEventListener('keydown', function(event) { });


/*  /------- GLOBAL VARIABLES ---------/   */


var guessInput = document.getElementById("guessInput").value;
var wrongGuesses = document.getElementById("guesses");
var numOfGuesses = document.getElementById("guesses-left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var numOfGuesses = 10;



/*  /------- FIRST GUESS/GENERATE RANDOM LETTER FUNCTION ---------/   */

$(document).ready(function() {
  var letters =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var letter = letters[Math.floor(Math.random() * letters.length)];
  console.log(letter);

  wins.innerHTML = 0;
  losses.innerHTML = 0;
});



document.addEventListener('keydown', function() {

  var guessInput = document.getElementById("guessInput").value;

  updateDisplayGuess(guessInput);
});



/*  /------- CONDITIONAL TO SELECTED VALUE ---------/   */

function updateDisplayGuess(guessInput) {
  var letters =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var letter = letters[Math.floor(Math.random() * letters.length)];
  guessInput.value = "";
  numOfGuesses.innerHTML--;


  if (numOfGuesses === 0 && guessInput) {
    gameOver();
    newGame();
  } else if (guessInput !== letter) {
    wrongGuessList();
  } else(guessInput === letter)
  newGame();
}



/*  /------- GAME OVER/RESTART ---------/   */

function gameOver() {

  var letters =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  guessInput.innerHTML = "";
  losses.innerHTML++;
  numOfGuesses.innerHTML = 10;
  wrongGuesses.innerHTML = "";

  var letter = letters[Math.floor(Math.random() * letters.length)];
}



function newGame() {
  guessInput.innerHTML = "";
  wins.innerHTML++;
  numOfGuesses.innerHTML = 10;
  wrongGuesses.innerHTML = "";
}



function wrongGuessList() {
  // add the letter to wrong guesses
  $("#guesses").append(guessInput + ", ");
}