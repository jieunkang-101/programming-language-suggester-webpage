$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var company = $("input:radio[name=groupCompany]:checked").val();
    var position = $("input:radio[name=groupPosition]:checked").val();
    var choice = $("input:radio[name=groupChoice]:checked").val();

    if (choice === "no") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $(".modalFade").show();
      $("#modalClose").click(function() {
        $("#myModal").hide();
      });
    } else if (position === "frontEnd" || position === "fullStack") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputJs").slideDown();
      $(".close").click(function() {
        $("#outputJs").slideUp();
      });
    } else if (position === "backEnd" && company ==="company1") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputPython").fadeIn();
      $(".close").click(function() {
        $("#outputPython").fadeOut();
      });
    } else if (position === "backEnd" && company ==="company3") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputCsharp").fadeIn();
      $(".close").click(function() {
        $("#outputCsharp").fadeOut();
      });
    } else {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputPython").fadeIn();
      $(".close").click(function() {
        $("#outputPython").fadeOut();
      });
    }

    $(".firstName").text(firstNameInput.substring(0, 1).toUpperCase() + firstNameInput.substring(1));
    $(".lastName").text(lastNameInput.substring(0, 1).toUpperCase() + lastNameInput.substring(1));
  });
});