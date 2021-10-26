const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('.board');
const colors = ['#483D8B', '#6A5ACD', '#4B0082', '#800080', '#8B008B', '#9932CC', '#9400D3', '#8A2BE2', '#9370DB', '#BA55D3', '#FF00FF', '#DA70D6', '#EE82EE', '#DDA0DD', '#D8BFD8', '#E6E6FA' ]
let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', e => {
    if(e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', e => {
    if(e.target.classList.contains('circle')) {
        score++
        e.target.remove();
        createRandomCircle();
      
    }
})
 

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time)
}


function decreaseTime() {
    if(time === 0 ) {
        finishGame();

    } else {
    let current = --time;
    if(current < 10) {
        current = `0${current}`;
    }
  setTime(current)
}
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
board.innerHTML = `<h1>Cчет <span class="primary">${score}</span></h1>`
timeEl.parentNode.classList.add('hide');
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height }= board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    board.append(circle);
    setColor(circle)

   
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}