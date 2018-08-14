
$(document).ready(function() {

  // GLOBAL VARIABLES
  var gemOne;
  var gemTwo;
  var gemThree;
  var gemFour;
  
  var wins = 0;
  var losses = 0;
   
  var randomNumber;
  
  var totalScore;

   
  function beginGame() {
    
    // RANDOM NUMBER 20-100
    randomNumber = 20 + Math.floor(Math.random() * 100);
    
    // RANDOM GEM NUMBERS 1-12
    gemOne = 1 + Math.floor(Math.random() * 12);
    gemTwo = 1 + Math.floor(Math.random() * 12);
    gemThree = 1 + Math.floor(Math.random() * 12);
    gemFour = 1 + Math.floor(Math.random() * 12);
    
    totalScore = 0;
    
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#randomNumber").html(randomNumber);
    $("#total-score").html(totalScore);
  }

  
  beginGame();

  
  $(".gems").on("click", function() {
    
    var selected = $(this).attr("value");

        if (selected == "gem1") {
          totalScore += gemOne;
        } else if (selected == "gem2") {
          totalScore += gemTwo;
        } else if (selected == "gem3") {
          totalScore += gemThree;
        } else (selected == "gem4") 
          totalScore += gemFour;
        
        $("#total-score").html(totalScore);
        $("#gameResult").html("");
        
        winOrLose();
  });

  
  function winOrLose() {
    
    if (totalScore > randomNumber) {
      losses++;
      $("#gameResult").html("You lose!");
      beginGame();
    }

    if (totalScore == randomNumber) {
      wins++;
      $("#gameResult").html("You win!");
      beginGame();
    }
  }


});
