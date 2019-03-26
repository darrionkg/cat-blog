$(document).ready(function() {
  $("button#blueThemeButton").click(function() {
    $("body").removeClass();
    $("body").addClass("blue");
  });
  $("button#blackThemeButton").click(function() {
    $("body").removeClass();
    $("body").addClass("black");
  });
});
