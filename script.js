const gridContainer = document.querySelector('.grid-container');
const buttons = document.querySelector(".buttons");

let gridSize = 32; // Initial grid size

// Function to generate the grid
function generateGrid(size) {
  // Clear existing grid
  gridContainer.innerHTML = '';

  // grid template columns and rows based on size
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Generate grid cells dynamically
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = 'black'; //  background color on hover
    });
    gridContainer.appendChild(cell);
  }
}

//fucntion to handle grid size button click
function handleGridSizeButtonClick(size){
  gridSize = size;
  generateGrid(gridSize);
}

//Event listeners for the size buttons
document.getElementById("size32").addEventListener("click", function() {
  handleGridSizeButtonClick(32);
});

document.getElementById("size64").addEventListener("click", function() {
  handleGridSizeButtonClick(64);
});

document.getElementById("size100").addEventListener("click", function() {
  handleGridSizeButtonClick(100);
});

// Initial grid generation
generateGrid(gridSize);



