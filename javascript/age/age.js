
// Solutions
// Get age and convert it to a Number (prompt always returns a String)
var age =  parseInt(prompt("What is your age?"));
// var age = Number(prompt("What is your age?"));

// If age is negative
if (age < 0) {
    alert("Age is negative.")
}
// No difference

// If age is 21
else if (age === 21) {
    alert("Happy 21st Birthday!")
}
// No difference.

// If age is odd
//(not evenly divisible by two)
if ((age % 2) === 1) {
// if(age % 2 !== 0) {
    alert("Age is odd.")
}

// If age is a perfect square
if ((Math.sqrt(age) % 2) === 0) {
// if(age % Math.sqrt(age) === 0) {
    alert("Perfect Square!")
}
