$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = $("input:radio[name=groupPosition]:checked").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (choice === "no") {
      $(".modalFade").fadeIn();
      $("#modalClose").click(function() {
        $("#myModal").fadeOut();
      });
    } else if (position === "frontEnd" || position === "fullStack") {
      $("#outputJs").show();
      $(".close").click(function() {
        $("#outputJs").hide();
      });
    } else if (position === "backEnd" && company ==="company1") {
      $("#outputPython").slideDown();
      $(".close").click(function() {
        $("#outputPython").slideUp();
      });
    } else if (position === "backEnd" && company ==="company3") {
      $("#outputCsharp").show();
      $(".close").click(function() {
        $("#outputCsharp").hide();
      });
    } else {
      $("#outputJs").show(); 
      $(".close").click(function() {
        $("#outputJs").hide();
      });
    }

    $(".firstName").text(firstNameInput.substring(0, 1).toUpperCase() + firstNameInput.substring(1));
    $(".lastName").text(lastNameInput.substring(0, 1).toUpperCase() + lastNameInput.substring(1));
  });
});