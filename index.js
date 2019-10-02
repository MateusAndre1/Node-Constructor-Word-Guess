// call Word.js to select words and use the Word constructor to store the values
// use inquirer to create the logic to have a user play the game
// have users see they have 10 guesses
// show many guesses remain
// display guessed letters in the terminal

var Word = require("./word");
var inquirer = require("inquirer");

// give variable to entire alphabet

var azArray = "abcdefghijklmnopqrstuvwxyz";

// make an array of words to be guessed

var mcUniverse = [
    "iron man",
    "pepper potts",
    "war machine",
    "phil coulson",
    "jarvis",
    "nick fury",
    "hulk",
    "black widow",
    "thor",
    "loki",
    "hawkeye",
    "captain america",
    "spiderman",
    "star lord",
    "groot",
    "thanos"
]

// make a variable to choose a random word from the array of mcu words

var randomMCU = Math.floor(Math.random() * mcUniverse.length);

// give a new variable the value of the random word

var randomWord = mcUniverse[randomMCU];

// add the random word into a new value for Word.js constructor

var pickedWord = new Word(randomWord);

// set if a new word is needed to false if user decides to end the game

var newWordNeeded = false;

// create array to store correct or incorrect letters guessed
var correctArr = [];
var incorrectArr = [];

// set a variable for 10 guesses

var guessesLeft = 10;

// create a function for the core logic

function mainLogic() {
    
}