const gridContainer = document.querySelector('.grid-container');
const gridSizeInput = document.getElementById('grid-size');
const updateGridBtn = document.getElementById('update-grid');

let gridSize = 30; // Initial grid size

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

// Initial grid generation
generateGrid(gridSize);

// Event listener for updating the grid
updateGridBtn.addEventListener('click', () => {
  const newSize = parseInt(gridSizeInput.value);

  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize;
    generateGrid(gridSize);
  } else {
    alert('Please enter a valid grid size between 1 and 100.');
  }
});

