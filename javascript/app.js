const deleteBtn = document.querySelector('#deleteButton')
const colorBtn = document.querySelector('#colorButton')
const blackBtn = document.querySelector('#blackButton')
const tenBtn = document.querySelector('#tenPix')
const twentyBtn = document.querySelector('#twentyPix')
const thirtyBtn = document.querySelector('#thirtyPix')

let gridContainer = document.querySelector('#mainField');

tenBtn.addEventListener('click', pixelSize)
twentyBtn.addEventListener('click', pixelSize)
thirtyBtn.addEventListener('click', pixelSize)

function makeRows(rows, cols) {
    //add property value for rows and cols
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell);
    };
};
makeRows(10, 10);
function pixelSize(event) {
    const pixSize = event.target.value;
    if (pixSize === '10')
        makeRows(10, 10)
    else if (pixSize === '20')
        makeRows(20, 20)
    else
        makeRows(30, 30)
}

const square = document.querySelector('#mainField');
square.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'black';
});




