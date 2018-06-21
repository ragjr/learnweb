
// var first = prompt("What is your first name?");
// var last = prompt("What is your last name?");
// var age = prompt("What is your age?");
//
// console.log("Your full name is " + first + " " + last + ".");
// console.log("Your age is " + age + ".");

// An attempt to enter once and set multiple variables.
// var name = prompt("What is your name?");
// var first2, last2 = name.split(" "); //This doesn't work like Python to set multiple variables.

// console.log("Your full name is " + name + ".");
// console.log("First2: " + first2);
// console.log("Last2: " + last2);

function fullname(name) {
    var first = name.split(" ")[0];
    var last = name.split(" ")[1];
    return [first, last]
} // This is returning a string as first,last instead of a list of [first,last].

var name = fullname(prompt("What is your name?"));
console.log(name);
console.log("First: " + name[0]);
console.log("Last: " + name[1]);
