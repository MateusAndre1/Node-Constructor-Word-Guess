// create a constructor for letters
// constructor should be able to either display an underlying charactor or a blank spaceholder "_"


function Letter(value) {

    this.letter = value;

    // boolean value that will show whether the letter has been guessed and automatically sets it to show underscore
    this.guessed = false;

    // create a string value function  that returns the underlying character or placeholder if not yet guessed
    this.toString = function() {
        // place a spacer to always be true between words
        if (this.letter === " ") {
            this.guessed = true;
            return " ";            
            // create an underscore in place of non guessed letters
        } else if (this.guessed === false) {
            return "_";
        } else {
            // display the letter if guessed correctly and returns the letter in upper case
            return this.letter.toUpperCase();
        }
        
    };

    // this function will check if the guessed letter is correct and change its value back to the letter display
    this.guess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
}


module.exports = Letter;