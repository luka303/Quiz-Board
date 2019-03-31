$(function() {
  $("#start-btn").click(function(event) {
    event.preventDefault();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
     if(userFirstName.length === 0 || userSecondName.length === 0) {
      $("#no-name").show();
      $("#firstName").addClass("enter-name");
      $("#secondName").addClass("enter-name");
    } else {
      $("#intro").hide();
      $("#quizpage").show();
    }
		$(document).ready(function() {
  $("p").click(function() {
    $(".quizpage").show();
  });
});
