
var answer = prompt("Are we there yet?");

// Version 1.0
// Requires "yes" to be the entered string.
// while(answer !== "yes") {
//     var answer = prompt("Are we there yet?")
// }

// Version 2.0
// Checks for the word "yes" in the entered string.
while(answer.indexOf("yes") === -1) {
    answer = prompt("Are we there yet?")
}

alert("We made it!")