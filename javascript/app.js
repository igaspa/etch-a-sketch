let CONST_COLOR = 'black';
let mode = 'black'

const deleteBtn = document.querySelector('#deleteButton')
const colorBtn = document.querySelector('#colorButton')
const blackBtn = document.querySelector('#blackButton')
const tenBtn = document.querySelector('#tenPix')
const twentyBtn = document.querySelector('#twentyPix')
const thirtyBtn = document.querySelector('#thirtyPix')
const resetBtn = document.querySelector('#resetButton')
const slider = document.querySelector('#pixSize');
const output = document.querySelector('#output');

let gridContainer = document.querySelector('#mainField');

deleteBtn.addEventListener('click', setMode);
blackBtn.addEventListener('click', setMode);
colorBtn.addEventListener('click', setMode);
resetBtn.addEventListener('click', reset);

function makeRows(rows, cols) {
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(cell);
    };
};
makeRows(50, 50)

function setMode(event) {
    mode = event.target.value;
    if (mode === 'erase')
        CONST_COLOR = '#E0FFF7'
    else if (mode === 'rainbow') {
        let randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        CONST_COLOR = `#${randomColor}`
    }
    else if (mode === 'black')
        CONST_COLOR = 'black'
}

function changeColor(event) {
    if (mode === 'rainbow') {
        let randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        CONST_COLOR = `#${randomColor}`
        event.target.style.backgroundColor = CONST_COLOR
    } else {
        event.target.style.backgroundColor = CONST_COLOR
    }
}

output.innerHTML = slider.value;
let cellValue = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value
    cellValue = this.value
    makeRows(cellValue, cellValue);
}

function reset() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(box => {
        box.style.backgroundColor = '#E0FFF7';
    });
}

