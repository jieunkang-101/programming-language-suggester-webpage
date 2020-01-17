$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

  });
});