const gridContainer = document.querySelector(".grid-container");

//generate grid cells dynamically
for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    gridContainer.appendChild(cell);
}

//hover effect 
const cells = document.querySelectorAll(".grid-container div");
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
});