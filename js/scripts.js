$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = $("input:radio[name=groupPosition]:checked").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (position === "frontEnd") {
      $("#outputCsharp").show(); 

      // $("#outputCsharp").show();
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

  //  $(".panel").show(); 

  });
});