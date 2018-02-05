var numOfSquares = 6;
var colors =[];
var pickedColor;
// selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// init
init();



function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add lick listeners
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color
			if (clickedColor === pickedColor) {
				// correct
				message.textContent = "CORRECT!";
				changeColors(clickedColor);
				document.querySelector("h1").style.background = clickedColor;
				resetButton.textContent = "Play again?";
			} else {
				//wrong
				this.style.backgroundColor = "#232323";
				message.textContent = "TRY AGAIN";
			}
		});
	}
}


// reset function
function reset() {
	// generate new colors
	colors = generateRandomColors(numOfSquares);
	//pick a random color from arr
	pickedColor = pickColor();
	// change display color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	// eleminate the correct
	message.textContent = "";
	// change the squares colors
	for (var i = 0; i <squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color) {
	//loop all square colors
	for (var i = 0; i < squares.length; i++) {
		//change square colors
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(n) {
	// make an array
	var arr = [];
	// repeat n times
	for (var i = 0; i < n; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// into String
	return "rgb(" + r +", " + g + ", " + b + ")";
}