
const container = document.createElement("div")
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "320px";

document.body.appendChild(container)

for (let i = 0; i < 16*16; i++) {
   const square = document.createElement("div")
square.style.width = "20px";
square.style.height = "20px";
square.style.boxSizing = "border-box";
square.style.border = "1px solid grey";
container.appendChild(square);
}

