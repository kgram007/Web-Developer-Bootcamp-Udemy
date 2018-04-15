var express = require("express");
var app = express();

// Animal - Sound table
var animalSoundTable = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof!"
};

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", function(req, res) {
  var animal = req.params.animal;
  var sound = animalSoundTable[animal.toLowerCase()];
  var resStr;
  if(sound !== undefined) {
    resStr = "The " + animal + " says '" + sound + "'";
  }
  else {
    resStr = "Sorry! " + animal + " is not in our database";
  }
  res.send(resStr);
})

app.get("/repeat/:str/:num", function(req, res) {
  var str = req.params.str;
  var num = Number(req.params.num);
  var resStr = "";
  for(var i=0; i<num; i++) {
    resStr += str + " ";
  }
  res.send(resStr);
})

// Default
app.get("*", function(req, res) {
  res.send("404: Sorry, page not found... What are you doing with your life?");
})

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started...");
});