// create a constructor for letters
// constructor should be able to either display an underlying charactor or a blank spaceholder "_"


function letter(value) {

    this.letter = value;

    // boolean value that will show whether the letter has been guessed
    this.guessed = false;

    // create a string value function  that returns the underlying character or placeholder if not yet guessed
    this.toString = function() {
        if (this.letter === " ") {
            this.guessed = true;
            return " ";            
        } else if (this.guessed === false) {
            return "_";
        } else {
            return this.letter;
        }
        
    };

    // this function will check if the guessed letter is correct
    this.guess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
}


