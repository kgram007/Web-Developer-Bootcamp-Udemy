/* Init */
var h1Tag = document.querySelector("h1");
var h2Tag = document.querySelector("h2");
var simpleLinkTag = document.querySelectorAll("#simple-link")[0];
var hrefGoogle = "http://www.google.com";
var hrefFacebook = "http://www.facebook.com";

h1Tag.classList.add("default");
simpleLinkTag.setAttribute("href", hrefGoogle);
simpleLinkTag.textContent = "Google";

/* Event Listener */
h2Tag.addEventListener("click", function() {
  h2Tag.style.background = "orange";
});

/* Run simple demo */
setInterval(colorfulDemo, 500);
setInterval(simpleLinkDemo, 1000);


/* Functions */
function colorfulDemo() {
  h1Tag.classList.toggle("colorful");
}

function simpleLinkDemo() {
  var currentHref = simpleLinkTag.getAttribute("href");
  if (currentHref !== hrefGoogle) {
    simpleLinkTag.setAttribute("href", hrefGoogle);
    simpleLinkTag.textContent = "Google";
  } else {
    simpleLinkTag.setAttribute("href", hrefFacebook);
    simpleLinkTag.textContent = "Facebook";
  }
}
