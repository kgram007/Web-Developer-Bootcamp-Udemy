$("#fade").on("click", function() {
  $("div").fadeToggle(1000, function() {
    // $(this).remove();
    console.log("Fading done!");
  });
});

$("#slide").on("click", function() {
  $("div").slideToggle(500, function() {
    // $(this).remove();
    console.log("Sliding done!");
  });
});