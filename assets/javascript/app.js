// GLOBAL VARIABLES
	var startScreen;
	var gameHTML;
	var counter = 30;
	
	var questionArray = ["The Nile is the longest river in the word.", "The Andes are the longest mountain range on Earth.", "The official, full name of Bangkok is 'Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Ayuthaya Mahadilok Phop Noppharat Ratchathani Burirom Udomratchaniwet Mahasathan Amon Piman Awatan Sathit Sakkathattiya Witsanukam Prasit'.", "Yellowstone is the largest U.S. national park.", "In Mumbai, dabbawallahs deliver over 200,000 lunch boxes every day"];
	var answerArray = [["True", "False"], ["True", "False"], ["True", "False"], ["True", "False"], ["True", "False"]];
	var correctAnswers = ["False", "True", "True", "False", "True"];

	var questionCounter = 0;
	var selectedAnswer;
	var theClock;
	var correctTally = 0;
	var incorrectTally = 0;




$(document).ready(function() {


// START SCREEN & BUTTON
	function initialScreen() {
		startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
		$(".mainArea").html(startScreen);
	}

	initialScreen(); 




// GENERATE HTML QUESTIONS
	function generateHTML() {
		gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1];
		$(".mainArea").html(gameHTML);
	}


// CLICKING START BUTTON
	$("body").on("click", ".start-button", function(event) {
		event.preventDefault();
		generateHTML();
		timer();



	});

// TIMER FUNCTION
	function timer() {
		theClock = setInterval(thirtySeconds, 1000);

		function thirtySeconds() {
			if(counter === 0) {
				clearInterval(theClock);
				alert ("YOU'RE OUT OF TIME!");
				resetGame();
			}

			if(counter > 0) {
				counter--;
			}
		}
	}

	var intervalId = setInterval(timer,1000);



// ANSWER QUESTIONS IF STATEMENTS
	$("body").on("click", ".answer", function(event){

		selectedAnswer = $(this).text();
		if(selectedAnswer === correctAnswers[answerArray[i]]) {

			correctTally ++;
		}
		else {
			incorrectTally ++;
		}

	}); // ON CLICK CLOSE



// LOSS = OUT OF TIME FUNCTION
	function outOfTime() {
		gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
		$(".mainArea").html(gameHTML);
		setTimeout(5000);
	}







// RESET GAME FUNCTION
	function resetGame() {
		questionCounter = 0;
		correctTally = 0;
		incorrectTally = 0;
		counter = 30;
		generateHTML();
		timer();
	}

}); // DOCUMENT READY CLOSE






