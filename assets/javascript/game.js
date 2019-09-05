var wordsArray=["broncos", "elway", "superbowl", "touchdown", "interception"];
var wins = 0;
var losses = 0;

//quick references to the html
var directionsText = document.getElementById("directions");
var computerChoiceText = document.getElementById("computer-choice");
var userChoiceText = document.getElementById("user-choice");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");

// triggered everytime the user presses a key; each time a new round starts.
document.onkey = function(event) {
    var userGuess = event.key; // the key the user pressed.
    var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
}