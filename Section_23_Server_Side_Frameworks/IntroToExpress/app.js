var express = require("express");
var app = express();

// "/" --> "Hi there!"
app.get("/", function(req, res) {
  res.send("<h1>Hi there!</h1>");
})

// "/bye" --> "Goodbye!!"
app.get("/bye", function(req, res) {
  res.send("Goodbye!!");
})

// "/dog" --> "MEOW!!!"
app.get("/dog", function(req, res) {
  console.log("Someone requested this page...");
  res.send("MEOW!!!");
})

// Routing variables
// Mocking Reddit page
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  var subreddit = req.params.subredditName.toUpperCase();
  res.send("WELCOME TO THE " + subreddit + " SUB-REDDIT PAGE");
})

// Default "*" --> "You are a star"
app.get("*", function(req, res) {
  res.send("You are a star!");
})

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});