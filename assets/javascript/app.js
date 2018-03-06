//score variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(document).ready(function () {
	$("#btn-start").click(function() {
		$("#quiz-body").css("visibility", "visible");
		$("#welcome-screen").css("visibility", "hidden");
	});

});

var seconds = 120;

var timerID = setInterval("countDown()", 1000);

function countDown() {
	if (seconds < 0) {
		clearTimeout(timerID);
		$("#quiz-body").css("visibility", "hidden");
		$("#results").css("visibility", "visible");
		checkAnswers();
	} else {
		$("#timeLeft").text(seconds + " seconds");
		seconds--;
	};

}

	$("#btn-submit").click(function() {
		clearTimeout(timerID);
		$("#quiz-body").css("visibility", "hidden");
		$("#results").css("visibility", "visible");
		checkAnswers();
	});

function checkAnswers() {
	var question1 = $("input[type=radio][name=question1]:checked").val();
	var question2 = $("input[type=radio][name=question2]:checked").val();
	var question3 = $("input[type=radio][name=question3]:checked").val();
	var question4 = $("input[type=radio][name=question4]:checked").val();
	var question5 = $("input[type=radio][name=question5]:checked").val();
	var question6 = $("input[type=radio][name=question6]:checked").val();
	var question7 = $("input[type=radio][name=question7]:checked").val();
	var question8 = $("input[type=radio][name=question8]:checked").val();
	var question9 = $("input[type=radio][name=question9]:checked").val();
	var question10 = $("input[type=radio][name=question10]:checked").val();

	if (question1 === "Sun Studios") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question1 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question2 === "Beale Street") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question2 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question3 === "Piggly Wiggly") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question3 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question4 === "Ducks") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question4 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question5 === "The Grizzlies") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question5 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question6 === "St. Jude Children's Research Hospital") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question6 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question7 === "World-Championship Barbecue Cooking Contest") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question7 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question8 === "Corncobs") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question8 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question9 === "Lorraine Motel") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question9 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

	if (question10 === "Graceland") {
		correct++;
		$("#correctCount").text(correct);
	} else if (question10 == null) {
		unanswered++;
		$("#unansweredCount").text(unanswered);
	} else {
		incorrect++;
		$("#wrongCount").text(incorrect);
	}

}