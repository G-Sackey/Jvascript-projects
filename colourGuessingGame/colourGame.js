var colors = generateRandomColors(6);
var numberSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberSquares = 3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i< squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberSquares = 6
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	}	
});


resetButton.addEventListener("click", function(){
	//generate all new colours
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//Initial colors of squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

	// grab color of picked square
	var clickedColor = this.style.background;

	// Compare color to pickedColor 
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

//function to change color of all boxes to correct color
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

//Random color generator function
function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array (repeat num times)
	for (var i = 0; i < num; i++){
		//get random color and push into array
	    arr.push(randomColor())
	}
	//return that array
	return arr;
}

//Random Color Function
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}