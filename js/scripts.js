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

//bussiness logic
function check() {
 var quizOne=document.Quiz.quizOne.value;
 var quizTwo=document.Quiz.quizTwo.value;
 var quizThree=document.Quiz.quizThree.value;
 var quizFour=document.Quiz.quizFour.value;
 var quizFive=document.Quiz.quizFive.value;
 var quizSix=document.Quiz.quizSix.value;
 var quizSeven=document.Quiz.quizSeven.value;
 var score=0;


 if (quizOne == "correct") {
	 score = score + 10;
 };
if (quizTwo == "correct") {
	score = score + 10;
};
if (quizThree == "correct") {
	score = score = 10;
}
if (quizFour == "correct") {
	score = score + 10;
}
if (quizFive == "correct") {
	score = score + 10;
}
if (quizFive == "correct") {
	score = score + 10;
};
if (quizSix == "correct") {
	score = score + 10;
}
if (quizSeven == "correct") {
	score = score + 10;
}

document.getElementById("score").style.visibility = visible";
	document.getElementById("correctNumber") = "HERE IS YOUR SCORE: " + score + "/70";
};
