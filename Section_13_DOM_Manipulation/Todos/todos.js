var lisTag = document.querySelectorAll("li");

for(var i = 0; i< lisTag.length; i++) {
  lisTag[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
  });

  lisTag[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });

  lisTag[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}
