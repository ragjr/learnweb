

// create secret number
var secretNumber = 10//Math.random();

// ask user for a guess
var guess = prompt("Guess a number");

var check = false

while(check === false){
    // check guess

    if (secretNumber === guess) {
        alert("Your guess is correct!");
        check = true;
    }

    else if (secretNumber > guess) {
        alert("You've guessed to low. Guess again!");
        guess = Number(prompt("Guess a number"));
    }

    else {
        alert("You've guessed to high. Guess again!");
        guess = Number(prompt("Guess a number"));
    }
}
