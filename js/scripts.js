$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = document.getElementById("position").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (position === "frontend") {
      $("#outputCsharp").show();
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

  //  $(".panel").show(); 

  });
});