$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();

    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);

  });
});