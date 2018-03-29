var todos = []
var run = true;

while (run) {
  var input = prompt("What would you like to do?");

  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
  } else if (input === "quit") {
    run = false;
  }
}

console.log("OK, You Quit the App! Bye!!");