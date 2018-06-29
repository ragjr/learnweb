var todos = [];
window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here
    let input = prompt("What would you like to do?");

    while(input !== "quit") {
        if (input === "list") {
            console.log(todos);
        }
        else if(input === "new") {
            let todoItem = prompt("Enter the task you'd like to add.");
            todos.push(todoItem)
        }
        input = prompt("What would you like to do?");
    }

    console.log("The app has quit.");
}, 500);
