var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Arun", "Suresh", "Ajith", "Arajen", "Ponni"];

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addfriend", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});