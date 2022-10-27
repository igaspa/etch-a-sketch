let CONST_COLOR = 'black';
let mode = 'black'

const deleteBtn = document.querySelector('#deleteButton')
const colorBtn = document.querySelector('#colorButton')
const blackBtn = document.querySelector('#blackButton')
const tenBtn = document.querySelector('#tenPix')
const twentyBtn = document.querySelector('#twentyPix')
const thirtyBtn = document.querySelector('#thirtyPix')
const resetBtn = document.querySelector('#resetButton')

let gridContainer = document.querySelector('#mainField');

// tenBtn.addEventListener('click', pixelSize)
// twentyBtn.addEventListener('click', pixelSize)
// thirtyBtn.addEventListener('click', pixelSize)

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
/*Button to change pixels, old
makeRows(10, 10);
function pixelSize(event) {
    const pixSize = event.target.value;
    if (pixSize === '10')
        makeRows(10, 10)
    else if (pixSize === '20')
        makeRows(20, 20)
    else
        makeRows(30, 30)
} */
function setMode(event) {
    mode = event.target.value;
    if (mode === 'erase')
        CONST_COLOR = 'white'
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
let slider = document.querySelector('#pixSize');
let output = document.querySelector('#output');
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
        box.style.backgroundColor = 'white';
    });
}

