$(document).ready(function(){

    // array of feelings topics
   
var topics = ["Awkward", "Confused", "Frustrated", "Tired", "Done", "Hungry", "Bored", "Drunk", "Crying", "Angry"];

// loop through array and display buttons for each topic
function buttonsDisplay(){
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++){
        var gifButtons = ("<button>");
        gifButtons.addClass("feelings");
        gifButtons.addClass("btn btn-info");
        ggifButtons.attr("data-name", topics[i]);
        gifButtons.text(topics[i]);
        $("#buttons").append(gifButtons);

        console.log(gifButtons);
    };
};

buttonsDisplay();

// function to add new buttons 

function newButton() {
    $("#submit").on("click", function() {
        var newFeelings = $("#feelingsInput").val().trim();
        if (newFeelings === ""){
            return false;
        }
        newFeelings.push(topics);

        buttonsDisplay();
    });
}

// on click event that makes a call to the API 

$("button").on("click", function() {
    var feelings = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=8BFUmE9fHdEO91V6w28Jpz0aUbCjZypT&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++){

            var feelingsDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var feelingsImage = $("<img>");
        };
    });
})
