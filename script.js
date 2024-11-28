const sizeButton = document.querySelector("#size-button");

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "500px";

document.body.appendChild(container);

function createGrid(gridSide) {
    container.innerHTML = "";

    const squareSide = 500 / gridSide;
    for (let i = 0; i < gridSide * gridSide; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSide}px`;
        square.style.height = `${squareSide}px`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid grey";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "grey";
        });
        container.appendChild(square);
    }
}


createGrid(16);

sizeButton.addEventListener("click", () => {
    let gridSide = parseInt(prompt("Enter the number of squares per side of the new grid (max 100):"), 10);
    if (isNaN(gridSide) || gridSide < 1 || gridSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(gridSide);
});
