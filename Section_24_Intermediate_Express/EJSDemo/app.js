var express = require("express");
var app = express();

app.use(express.static("public/"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});


app.get("/posts", function(req, res) {
  var posts = [
      {title: "Post 1", author: "Charlie"},
      {title: "Post 2: My adorable pet bunny", author: "Colt"},
      {title: "My astro love", author: "Ram"},
    ];
    
    res.render("posts", {posts: posts});
});

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});