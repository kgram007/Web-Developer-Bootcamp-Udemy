/* Using Namespace */
var dogSpace = {
  speak: function() {
    return "WOOF!";
  }
}

var catSpace = {
  speak: function() {
    return "MEOW!";
  }
}

/* Using this keyword */
var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

comments.print = function() {
  this.data.forEach(function(comment) {
    console.log(comment);
  });
}
