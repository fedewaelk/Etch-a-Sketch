const sizeButton = document.querySelector("#size-button");
sizeButton.style.margin = "20px";
sizeButton.style.padding = "10px";

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "500px";
container.style.justifyContent = "flex-start";

document.body.appendChild(container);

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return { red, green, blue };
}

function createGrid(gridSide) {
    container.innerHTML = "";

    const squareSide = 500 / gridSide;
    for (let i = 0; i < gridSide * gridSide; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSide}px`;
        square.style.height = `${squareSide}px`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid lightGrey";

        const color = randomColor();
        let currentOpacity = 0;

        square.addEventListener("mouseover", () => {
            square.style.border = "none";

            if (currentOpacity < 1) {
                currentOpacity += 0.1;
            }
            square.style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${currentOpacity})`;
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
