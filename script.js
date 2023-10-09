// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

let colorSingle = false;

// Add a row
function addR() {
    if (!numCols){
        numCols++;
    }
    numRows++;
    let newRow = document.createElement("tr");
    newRow.setAttribute("id", "row");
    for (let counter = 0; counter < numCols; counter++){
        let newCol = document.createElement("td");
        newCol.setAttribute("id","col");
        newCol.style.backgroundColor = "white";
        newCol.addEventListener("click", fill);
        newRow.appendChild(newCol);
    }
    document.getElementById("grid").appendChild(newRow);
}

// Add a column
function addC() {
    if (!numRows){
        addR();
    }
    else{
        numCols++;
        let rowList = document.querySelectorAll("#row");
        for (let index = 0; index < rowList.length; index++){
            let newCol = document.createElement("td");
            newCol.setAttribute("id", "col");
            newCol.style.backgroundColor = "white";
            newCol.addEventListener("click", fill);
            rowList[index].appendChild(newCol);
        }
    }
}

function resetGrid(){
    while(numRows){
        document.getElementById("grid").removeChild(document.getElementById("grid").lastChild);
        numRows--;
    }
}

// Remove a row
function removeR() {
    if (numRows){
        document.getElementById("grid").removeChild(document.getElementById("grid").lastChild);
        numRows--;
        if (!numRows){
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if (numCols){
        let rows = document.querySelectorAll("#row");
        numCols--;
        for (let index = 0; index < rows.length; index++){
            rows[index].removeChild(rows[index].lastChild);
        }
        if (!numCols){
            resetGrid();
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

function fill(){
    if (colorSingle){
        this.style.backgroundColor = colorSelected;
    }
}

function fillSingle(){
    if (!colorSingle){
        colorSingle = true;
    }
    else if (colorSingle){
        colorSingle = false;
    }
}

// Fill all uncolored cells
function fillU(){
    let cols = document.querySelectorAll("#col");
    for (let index = 0; index < cols.length; index++){
        if (cols[index].style.backgroundColor == "white"){
            cols[index].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cols = document.querySelectorAll("#col");
    for (let index = 0; index < cols.length; index++){
        cols[index].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cols = document.querySelectorAll("#col");
    for (let index = 0; index < cols.length; index++){
        cols[index].style.backgroundColor = "white";
    }
}