//user interface logic
$(function() {
  $("#start-btn").click(function(event) {
    event.preventDefault();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
     if(userFirstName.length === 0 || userSecondName.length === 0) {
      $("#no-name").show();
      $("#firstName").addClass("enter-name");
      $("#secondName").addClass("enter-name");
			$("#arrow-right").click(function() {
		     $("#intro").hide();
		     $("#quizpage").show()

 var quizOne=document.Quiz.quizOne.value;
 var quizTwo=document.Quiz.quizTwo.value;
 var quizThree=document.Quiz.quizThree.value;
 var quizFour=document.Quiz.quizFour.value;
 var quizFive=document.Quiz.quizFive.value;
 var quizSix=document.Quiz.quizSix.value;
 var quizSeven=document.Quiz.quizSeven.value;
