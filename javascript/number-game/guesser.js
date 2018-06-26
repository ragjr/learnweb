
// create secret number
var secretNumber = Math.random();

// ask user for a guess
var guess = prompt("Guess a number");

// check guess
if (secretNumber === guess) {
    alert("Your guess is correct!");
}

else if (secretNumber > guess) {
    alert("You've guessed to low. Guess again!");
    // guess = Number(prompt("Guess a number"));
}

else {
    alert("You've guessed to high. Guess again!");
}