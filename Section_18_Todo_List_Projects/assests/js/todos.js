$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().slideUp(400, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var newTodoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newTodoText + "</li>");
    $("li").last().hide();
    $("li").slideDown(400);
  }
});

$("#add-btn").click(function() {
  $("input[type='text']").slideToggle(400);
});
