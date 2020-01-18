$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = $("input:radio[name=groupPosition]:checked").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (position === "frontEnd" || position === "fullStack") {
      $("#outputJs").toggle(); 
    } else if (position === "backEnd" && company ==="company1") {
      $("#outputPython").toggle();
    } else if (position === "backEnd" && company ==="company3") {
      $("#outputCsharp").toggle();
    } else {
      $("#outputJs").toggle(); 
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

  //  $(".panel").show(); 

  });
});