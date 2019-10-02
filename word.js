// create a word constructor that will depend on the letter.js constructor
// create an array for each letter value
// push that array of the new  letter values into a string
// be able to take each guessed letter argument from user and use the guess callback from letter.js

var Letter = require("./letter.js");

function Word(entireWord) {

    // will make an array of the letters of a word
    this.letterArray = [];

    // create a loop to give a variable for each letter to be passed into the letterArray
    for (var i = 0; i < entireWord.length; i++) {
        // give the letters the value from letter.js constructor
        var letter = new Letter(entireWord[i]);
        // add all the letters with the new value to the array
        this.letterArray.push(letter);
    }

    // log out the word with letter values to the terminal
    this.log = function () {
        // create a word string to push each letters into
        let fullWord = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            // add each letter into the word string
            fullWord += this.letterArray[i] + " ";
        }
        
        console.log(`\n${wordLog} \n========================\n`);
    };

    // grab users guessed letter
    this.userGuess = function (input) {
        for (var i = 0; i < this.letterArray.length; i++) {
            // call the guess function from letter constructor to be able to change guessed letters to true value
            this.letterArray[i].guess(input);
        }
    };
}

module.exports = Word;