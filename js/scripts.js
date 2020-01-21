$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var companyType = $("input:radio[name=groupCompany]:checked").val();
    var jobPosition = $("input:radio[name=groupPosition]:checked").val();
    var interestAboutCode = $("input:radio[name=groupChoice]:checked").val();

    if (interestAboutCode === "no") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $(".modalFade").show();
      $("#modalClose").click(function() {
        $("#myModal").hide();
      });
    } else if (jobPosition === "frontEnd" || jobPosition === "fullStack") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputJs").slideDown();
      $(".close").click(function() {
        $("#outputJs").slideUp();
      });
    } else if (jobPosition === "backEnd" && companyType ==="company1") {
      $("#outputJs").hide();
      $("#outputPython").hide();
      $("#outputCsharp").hide();
      $("#myModal").hide();
      $("#outputPython").fadeIn();
      $(".close").click(function() {
        $("#outputPython").fadeOut();
      });
    } else if (jobPosition === "backEnd" && companyType ==="company3") {
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