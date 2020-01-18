$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = $("input:radio[name=groupPosition]:checked").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (choice === "no") {
      $(".modalFade").show();
    } else if (position === "frontEnd" || position === "fullStack") {
      $("#outputJs").show();
    } else if (position === "backEnd" && company ==="company1") {
      $("#outputPython").show();
    } else if (position === "backEnd" && company ==="company3") {
      $("#outputCsharp").show();
    } else {
      $("#outputJs").show(); 
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    
  });
});