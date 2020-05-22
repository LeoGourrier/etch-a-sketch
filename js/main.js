let numOfSquares = 27;

function insertSquares(num) {
	let sketchBoard = document.querySelector('#etch');
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
			x.classList += ' yellow';
			console.log(x.classList);
		});
	});
}

insertSquares(numOfSquares);
addHoverToSquares();
