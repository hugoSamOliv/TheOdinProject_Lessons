const body = document.querySelector("body");
const grid = document.querySelector("#grid");
const blackButton = document.querySelector("#black");
const randomButton = document.querySelector("#randomize");
const resetButton = document.querySelector("#reset");
let tables = 16;
let gridArea = tables * tables

createGrid(tables, gridArea);

function createGrid(table, area) {
    for (let i = 0; i < area; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.style.backgroundColor = "white";
        gridBlock.style.border = "1px solid rgb(240, 240, 240)";
        gridBlock.style.width = gridBlock.style.height = `${600 / table}px`;
        grid.appendChild(gridBlock);
        console.log("appended")
    }
}


function getInputValue() {
    const input = document.querySelector(".input");
    let inputText = document.querySelector(".input-text");
    inputText.textContent = input.value;
    
    input.addEventListener("change", (event) => {
        inputText.textContent = event.target.value;
    });
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function changeGridBlockSize() {
    const input = document.querySelector(".input");
    getInputValue();
    input.addEventListener("change", (event) => {
        clearGrid();
        tables = parseInt(event.target.value);
        gridArea = tables * tables;
        createGrid(tables, gridArea);
    });
}

function addBlackColor() {
    const blocks = document.querySelectorAll("#grid div");
    for (let i = 0; i < gridArea; i++) {
        blocks.item(i).addEventListener("mouseover", () => {
            blocks.item(i).style.backgroundColor = "black";
        });
    }
}

function addRandomColor() {
    const blocks = document.querySelectorAll("#grid div");
    for (let i = 0; i < gridArea; i++) {
        const R = Math.floor(Math.random() * 255) + 1;
        const G = Math.floor(Math.random() * 255) + 1;
        const B = Math.floor(Math.random() * 255) + 1;
        blocks.item(i).addEventListener("mouseover", () => {
            blocks.item(i).style.backgroundColor = `rgb(${R}, ${G},${B})`;
        });
    }
}

function reset() {
    const blocks = document.querySelectorAll("#grid div");
    for (let i = 0; i < gridArea; i++) {
        blocks.item(i).style.backgroundColor = "white";
    }
}

blackButton.addEventListener("click", addBlackColor);
randomButton.addEventListener("click", addRandomColor);
resetButton.addEventListener("click", reset);

changeGridBlockSize(gridArea);