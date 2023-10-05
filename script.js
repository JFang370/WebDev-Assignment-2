// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

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
        newCol.setAttribute("style", "backgroundColor: white;");
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
        let rowList = document.querySelectorAll("#row");
        for (let index = 0; index < rowList.length; index++){
            let newCol = document.createElement("td");
            newCol.setAttribute("id", "col");
            newCol.setAttribute("style", "backgroundColor: white;");
            rowList[index].appendChild(newCol);
        }
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}