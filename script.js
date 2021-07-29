// Function related Query Selectors

// Sketchpad /Container
let gridArea = document.querySelector('.sketchpad');

// Sketchpad Pixels / Childnodes(divs)
let gridPixels = document.querySelector('.sketchpad').children;



// Button Selectors for Event Triggering

let defaultColor = document.querySelector('#color')
let randomToggle = document.querySelector('#random-mode')
let eraser = document.querySelector('#eraser')
let pixelGraffiti = document.querySelector('#pixel-graffiti')
let bgColor = document.querySelector('#bgcolor')
let clear = document.querySelector('#clear')
let lineToggle = document.querySelector('#line-toggle')
let gridSize = document.querySelector('#grid-size')


// Event Listeners in respect to Button selectors

defaultColor.addEventListener("change", colorMode);
randomToggle.addEventListener("click", randomMode)
eraser.addEventListener("click", eraserMode)
pixelGraffiti.addEventListener("click", generateGraffiti);
bgColor.addEventListener("click", generateBg),
    clear.addEventListener("click", clearBg);
lineToggle.addEventListener("click", toggleLines);
gridSize.addEventListener("change", getSize);




// * Random Color Generator Function
function random_color() {
    const r = Math.floor(Math.random() * 300)
    const g = Math.floor(Math.random() * 300)
    const b = Math.floor(Math.random() * 300)
    return `rgba(${r},${g},${b})`
}


//Button Functions

// 1. Color Mode -> Changes pixel bg color = color in color picker.

function colorMode() {
    color = this.value;
    Array.from(gridPixels).forEach(element =>
        element.addEventListener('mouseover', (e) =>
            e.target.style.backgroundColor = color));
}

// 2.Random Color Mode -> Changes pixel bg to a new color.

function randomMode() {
    Array.from(gridPixels).forEach(element =>
        element.addEventListener('mouseover', (e) =>
            e.target.style.backgroundColor = random_color()));
}

// 3. Eraser Mode -> Changes pixel bg to white

function eraserMode() {
    Array.from(gridPixels).forEach(element =>
        element.addEventListener('mouseover', (e) =>
            e.target.style.backgroundColor = 'white'));
}


// 4.Graffiti Generator -> Each pixel gets random color.

function generateGraffiti() {
    Array.from(gridPixels).forEach(e => e.style.backgroundColor = random_color());
}


// 5. Random Background -> Every pixel gets a random(same) color.

function generateBg() {
    let color = random_color()
    Array.from(gridPixels).forEach(e => e.style.backgroundColor = color);
}


// 6. Clear Background = Every pixel gets white bg.

function clearBg() {
    Array.from(gridPixels).forEach(e => e.style.backgroundColor = 'white');
}


// 7.Grid Line Toggle -> Toggles pixel borders.

function toggleLines() {
    Array.from(gridPixels).forEach((e) => e.classList.toggle('add-lines'));
}



// Control FLow Functions -> getSize calls CreateGrid, CreateGrid calls clearGrid.


//1. Get grid size -> Calls grid function and passes the current grid size , Updates the grid size

function getSize() {
    size = this.value;              //Grid size, size-> passed by event listener after change.
    document.getElementById('grid-text').innerHTML = `Grid Size-${size}`;   //Shows the live grid size
    createGrid(size);
}


// 2. Create Grid -> For loop creates the grid and css grid align the grid(x,y)

function createGrid(size) {
    eraseGrid();                //Calls before creating grid so the container does not get overflowed on every additional call.
    gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add('grid-element');
        gridArea.appendChild(div);
    }
}


// 3. Erase Grid -> Erases sktechpad childnotes / pixels.

function eraseGrid() {
    gridArea.innerHTML = '';
}



// Default Grid on Browser Load
createGrid(32)




