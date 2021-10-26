const board = document.querySelector('#board');
const colors = ['#483D8B', '#6A5ACD', '#4B0082', '#800080', '#8B008B', '#9932CC', '#9400D3', '#8A2BE2', '#9370DB', '#BA55D3', '#FF00FF', '#DA70D6', '#EE82EE', '#DDA0DD', '#D8BFD8', '#E6E6FA' ]
const SQUARES_NUMBER = 400;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square);
}

function setColor(e) {
    const element = e.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    const element = e.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}

