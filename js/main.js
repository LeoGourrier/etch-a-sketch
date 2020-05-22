let numOfSquares = 27;

function insertResetButton() {
	let buttonContainer = document.createElement('div');
	buttonContainer.id = 'buttonContainer';
	let button = document.createElement('button');
	button.textContent = 'Reset';
	button.id = 'resetBtn';
	buttonContainer.appendChild(button);
	let body = document.querySelector('body');
	body.appendChild(buttonContainer);
	body.insertBefore(buttonContainer, body.firstChild);
}
function addHoverToReset() {
	let button = document.querySelector('#resetBtn');
	button.addEventListener('click', function() {
		//get all squares
		let squares = Array.from(document.querySelectorAll('.squares'));
		//remove yellow class from squares
		squares.map((x) => (x.classList = _removeClass(x.classList.value, 'yellow')));
		//prompt the user for number of squares
		//add that number to numOfSquares
		numOfSquares = prompt('How many Squares?', 16);
		insertSquares(numOfSquares);
		addHoverToSquares();
		//alert(numOfSquares);
	});
}
function insertSquares(num) {
	let sketchBoard = document.querySelector('#etch');
	sketchBoard.innerHTML = '';
	sketchBoard.style = `grid-template-columns: repeat(${num},1fr);
	grid-template-rows: repeat(${num},1fr);`;

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			let box = document.createElement('div');
			box.id = `row${i}column${j}`;
			box.classList = 'squares';

			sketchBoard.appendChild(box);
		}
	}
}
function addHoverToSquares() {
	let listOfSquares = Array.from(document.querySelectorAll('.squares'));
	listOfSquares.map((x) => {
		x.addEventListener('mouseenter', function() {
			x.classList = _addClass(x.classList.value, 'yellow');
			//console.log(x.classList);
		});
	});
}
function _addClass(str, a) {
	//take class string
	//convert it to array
	str = str.split(' ');
	//add class to array
	str.push(a);
	//convert array to string with spaces
	str = str.join(' ');
	//return this string
	return str;
}
function _removeClass(str, a) {
	//take class string
	//convert it to array
	str = str.split(' ');
	//remove class from array if it's in there
	str = str.filter((x) => x != a);
	//convert array to string with spaces
	str = str.join(' ');
	//return this string
	return str;
}

insertResetButton();
addHoverToReset();
insertSquares(numOfSquares);
addHoverToSquares();
