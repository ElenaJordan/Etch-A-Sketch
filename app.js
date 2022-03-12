const container = document.getElementById("gridContainer");

/*function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);*/

function makeFlexGrid(xAxis, yAxis) {
    for (x = 0; x < xAxis; x++) {
        let column = document.createElement("div");
        container.appendChild(column).className = "column";
        for (y = 0; y < yAxis; y++) {
            let cell = document.createElement("div");
            column.appendChild(cell).className = "cell";
            //cell.innerText = ("0");
        }
    }
}

makeFlexGrid(16, 16);