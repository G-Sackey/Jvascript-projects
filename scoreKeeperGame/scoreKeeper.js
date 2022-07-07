var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winScoredisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //Set gameover to false
var winScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score === winScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	//adds 1 to score if its not gameover
	if (!gameOver){
		p2Score++;
		//Checks if the score has reached game and switches gameover to true
		if (p2Score === winScore){
			//adds winner class from css file to the p2display
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}	
});

//Colour change from css file (scoreKeeper.css)


//The following code resets game back to default after clicking the reset button

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

//Setting game back to start after completion
resetButton.addEventListener("click", function(){
	reset();
});


//Code that is used to change number of games to be played
numInput.addEventListener("change", function(){
	winScoredisplay.textContent = this.value;
	winScore = Number(this.value);
	reset();
});

//this keyword refers to whatever the event was listening on ie.numInput