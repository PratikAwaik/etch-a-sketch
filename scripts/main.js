const sketchPad = document.getElementById("sketch-pad");
const redButton = document.getElementById("red");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const randomButton = document.getElementById("random");
const randomGray = document.getElementById("grayscale");
const slider = document.getElementById("slider");
const valueHtml = document.getElementById("value");
const colorSelector = document.getElementById("color-selector");

const styleSketchPad = window.getComputedStyle(sketchPad);
const widthSketchPad = +styleSketchPad.getPropertyValue("width").slice(0, -2); 
const heightSketchPad = +styleSketchPad.getPropertyValue("height").slice(0, -2);

// set initial grids
createGrid(slider.value);
valueHtml.innerHTML = `Size: ${slider.value}`;

// change the size of the grids on slider change
slider.oninput = () => {
    let sliderValue = +slider.value;
    valueHtml.innerHTML = `Size: ${sliderValue}`;
    clearGrid();
    createGrid(sliderValue);
}

// change to default color 
redButton.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.onmouseover = () => {
        grid.style.backgroundColor = "red";
    })
};

// clear Grid
clearButton.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.style.backgroundColor = "white");
};

// erase the hovered grids
eraserButton.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.onmouseover = () => {
        grid.style.backgroundColor = "white";
    })
};

// add random color to grid on hover
randomButton.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.onmouseover = () => {
        grid.style.backgroundColor = randomRGB();
    })
}

// add random greys to grid on hover
randomGray.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.onmouseover = () => {
        grid.style.backgroundColor = randomGrayScale();
    }) 
}

// Any color
colorSelector.onclick = () => {
    let allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((grid) => grid.onmouseover = () => {
        grid.style.backgroundColor = colorSelector.value;
    })
}

function createGrid(sliderValue) {
    for (let i = 0; i < sliderValue; i++) {
        for (let j = 0; j < sliderValue; j++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.width = ((widthSketchPad / sliderValue) - 2).toString() + "px";
            div.style.height = ((heightSketchPad / sliderValue) - 2).toString() + "px";
            div.style.backgroundColor = "white";
            div.style.border = "1px solid rgb(233,232,232)";
            div.style.boxShadow = "2px 6px 10px -4px #000000";
            div.style.borderCollapse = "collapse";
            div.onmouseover = () => div.style.backgroundColor = "red";
            sketchPad.appendChild(div);
        }
    }
}

function clearGrid() {
    if (sketchPad.hasChildNodes()) {
        while (sketchPad.hasChildNodes()) {
            sketchPad.removeChild(sketchPad.lastChild);
        }
    }
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function randomGrayScale() {
    let b = Math.floor(Math.random() * 256);
    return `rgb(${b}, ${b}, ${b})`;
}
