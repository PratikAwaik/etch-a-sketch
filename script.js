let grid = document.getElementById("grid");
let slider = document.getElementById("myRange");
createGrid(slider.value);
document.getElementById("grid-size").innerHTML = slider.value;

// if user slides make a new grid of that size
slider.oninput = () => {
    document.getElementById("grid-size").innerHTML = slider.value;
    clearGrid();
    createGrid(slider.value);
}

// make a new grid
function createGrid(size) {
    let dimension = (500 - size) / size;
    for (i = 0; i < size; i++) {
        // create rows
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
    
        // create columns
        for (j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.setAttribute("class", "col");
            col.style = `width: ${dimension}px; height: ${(dimension)}px;`;
            row.appendChild(col);

            // set default color to red
            col.onmouseover = () => {
                col.style.backgroundColor = "red";
            }
        } 
    }
}

// remove all rows and columns
function clearGrid() {
    if (grid.hasChildNodes()) {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.lastChild);
        }
    }
}

// reset grid (change color to white)
const reset = document.getElementById("reset");
reset.onclick = () => {
    let allElements = document.querySelectorAll(".col");
    allElements.forEach(ele => { 
        ele.style.backgroundColor = "white";
    });
}


// if rgb button clicked, change the color to random RGB
const rgb = document.getElementById("rgb");
rgb.onclick = () => {
    let allElements = document.querySelectorAll(".col");
    allElements.forEach(ele => ele.onmouseover = () => {
        ele.style.backgroundColor = randomRGB();
    })
}

// generates random RGB colors
function randomRGB() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// if grayscale button clicked, set color to grayscale
const grayScale = document.getElementById("grayscale");
grayScale.onclick = () => {
    let allElements = document.querySelectorAll(".col");
    allElements.forEach(col => col.onmouseover = () => {
        col.style.backgroundColor = randomGrayScale();
    })
};

// generate random grayscale colors
function randomGrayScale() {
    let c = Math.round(Math.random() * 256);
    return `rgb(${c}, ${c}, ${c})`;
};

// get user's color preference and set that color
let userColor = document.getElementById("user-color");
let userColorSet = document.getElementById("user-color-set");
userColorSet.onclick = () => {
    let allElements = document.querySelectorAll(".col");
    allElements.forEach(ele => ele.onmouseover = () => {
        ele.style.backgroundColor = userColor.value;
    })
};

// if user clicks erase, erase color on mouseover i.e. change color to white
let eraser = document.getElementById("erase");
eraser.onclick = () => {
    let allElements = document.querySelectorAll(".col");
    allElements.forEach(ele => ele.onmouseover = () => {
        ele.style.backgroundColor = "white";
    })
};
