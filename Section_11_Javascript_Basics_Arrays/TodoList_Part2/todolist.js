var todos = []
var run = true;

window.setTimeout(function() {
  while (run) {
    var input = prompt("What would you like to do?");

    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    } else if (input === "quit") {
      quitApp();
    }
  }

  console.log("OK, You Quit the App! Bye!!");
}, 500);

function listTodos() {
  console.log("****************");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("****************");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}

function quitApp() {
  run = false;
}
