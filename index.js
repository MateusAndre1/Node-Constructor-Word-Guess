// call Word.js to select words and use the Word constructor to store the values
// use inquirer to create the logic to have a user play the game
// have users see they have 10 guesses
// show many guesses remain
// display guessed letters in the terminal

var Word = require("./word.js");
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

    // give a new word if user decides to keep playing
    if (newWordNeeded) {
        var randomMCU = Math.floor(Math.random() * mcUniverse.length);
        var randomWord = mcUniverse[randomMCU];
        pickedWord = new Word(randomWord);
        // set new word back to false until user decides to keep playing
        newWordNeeded = false;
    }

    // array to put the chosen word
    let chosenWord = [];
    pickedWord.letterArray.forEach(checkAll);

    // use inquirer to get input from user
    if (chosenWord.includes(false)) {
        inquirer.prompt([{
            type: "input",
            message: "Pick a letter from A to Z",
            name: "userInput"
        }]).then(function (input) {
            // capture the user input and display corresponding logs
            if (!azArray.includes(input.userInput) || input.userInput.length > 1) {
                console.log(`\nHave to enter something useful..\n`);
                mainLogic();
            } else if (incorrectArr.includes(input.userInput) || correctArr.includes(input.userInput) || input.userInput === "") {
                console.log(`\nThis has already been guessed\n`);
                mainLogic();
            } else {
                // make an array to have user input pushed into it to check if it is correct
                var checkWordArr = [];
                pickedWord.userGuess(input.userInput);
                pickedWord.letterArray.forEach(checkWord);
                if (checkWordArr.join("") === chosenWord.join("")) {
                    incorrectArr.push(input.userInput)
                    guessesLeft--;
                    console.log(`\nIncorrect\n`);
                } else {
                    correctArr.push(input.userInput);
                    console.log(`\nAtta boy! You got it one!\n`);
                }

                pickedWord.log();

                // display how many guesses left and what letters have been guessed
                console.log(`Guesses left: ${guessesLeft}\nLetters Guessed: ${incorrectArr.join(" ")}\n`);

                if (guessesLeft > 0) {
                    mainLogic();
                } else {
                    console.log(`Sorry you have lost\n`);
                    restartGame();
                }

                function checkWord(key) {
                    checkWordArr.push(key.guessed)
                }
            }
        });
    } else {
        console.log(`YOU WIN!\n`);
        restartGame();
    }

    function checkAll(key) {
        chosenWord.push(key.guessed);
    }
}

function restartGame() {
    inquirer.prompt([{
        type: "list",
        message: "Guess another hero!?",
        choices: ["YES YES AGAIN!", "GET ME OUT IMMA VILLAIN!!"],
        name: "restart"
    }]).then(function (input) {
        if (input.restart === "YES YES AGAIN!") {
            newWordNeeded = true;
            incorrectArr = [];
            correctArr = [];
            guessesLeft = 10;
            mainLogic();
        } else {
            return;
        }
    });
}

mainLogic();