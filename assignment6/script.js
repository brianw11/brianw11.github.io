$(document).ready (function(){

    //Array of topics
    var topics = ["Motocross", "Skiing", "Lucha Libre"];
    
    //The Query URL from Giphy
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3M86uzl92GvanTMth5UmpGZHXAcHpFm8&q=sports&limit=10&offset=0&rating=G&lang=en";
    
    //Display the giphy image
    function displaySports(){
        $('#giphy-views').empty();
        //create a var that will equal to the attribute data name
        var sports = $(this).attr("data-name");
        var limits = '&limit=10';

        var APIKey = "3M86uzl92GvanTMth5UmpGZHXAcHpFm8";

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3M86uzl92GvanTMth5UmpGZHXAcHpFm8&q=motorcross&limit=10&offset=0&rating=PG&lang=en";

        //Set the Ajax info to get information from Giphy
        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(response) {
            for(var i = 0; i <= 10; i++){
            // Create a div to hold the sport
            var sportsDiv = $("<div class ='sports'>");
                
                // Storing the rating data
                var rating = response.data.rating;
                // Creating an element to have the rating displayed
                var rate = $("<p>").text("Rating: " + rating);
                // Displaying the rating
                   sportsDiv.append(rate);
    
                   
                   // Retrieving the URL for the gif
                var imgURL = response.data[i].images.downsized.url;
    
                // Creating an element to hold the image
                var image = $('<img>').attr("src", imgURL);
    
                // Appending the image
                sportsDiv.prepend(image);
    
    
              // Putting the entire giphy row above the previous giphys
              $("#giphy-views").append(sportsDiv);
        }
    
    });
    
    }
    
    // Function for displaying giphy data
          function render() {
    
            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#button-view").empty();
    
            // Looping through the giphy array
            for (var i = 0; i < topics.length; i++) {
    
              // Then dynamicaly generating buttons for each giphy in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class of giphy to our button
              a.addClass("giphy-class");
              // Adding a data-attribute
              a.attr("data-name", topics[i]);
              // Providing the initial button text
              a.text(topics[i]);
              // Adding the button to the buttons-view div
              $("#button-view").append(a);
            }
          }
    
     // This function handles events where a giphy button is clicked
          $("#add-sport").on("click", function(event) {
            event.preventDefault();
            // This line grabs the input from the textbox
            var sport1 = $("#input").val().trim();
    
            // Adding sport from the textbox to our array
            topics.push(sport1);


            // clear input field
            $("#input").val("");
    
            // Calling render which handles the processing of our giphy array
            render();
          });
    
          // Adding a click event listener to all elements with a class of ".giphy-class"
          $(document).on("click", ".giphy-class", displaySports);
    
          // Calling the render function to display the intial buttons
          render();
    
    });