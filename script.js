const container = document.querySelector("#grid-container");
const setupButton = document.querySelector('button');

setupButton.addEventListener('click', () => {
    container.innerHTML = "";
    let gridSize;
    let response;

    do {
        response = window.prompt("Please enter grid size (h/w) as a value between 2 and 100.", "16");
        gridSize = parseInt(response, 10);


        if (response === null || response === "") {
            alert("Input cancelled.");
            return;
        }

        if (isNaN(gridSize) || gridSize < 2 || gridSize > 100) {
            alert("Invalid input. Please enter a numebr between 4 and 100.");
        }
    } while (isNaN(gridSize || gridSize < 2 || gridSize > 100));

    const infoText = document.querySelector('p');
    infoText.textContent = `Grid Size: ${gridSize} (Click button again to generate new grid)`

    populateGrid(gridSize);
});

function populateGrid(gridSize) {
    const squareSize = String(Math.floor(960 / gridSize)) + "px";

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = "square";
            square.style.backgroundColor = getRandomColor();
            square.style.width = squareSize;
            square.style.height = squareSize;

            square.addEventListener('mouseenter', () => {
                if (Number(square.style.opacity) < 1) {
                    square.style.opacity = String(Number(square.style.opacity) + 0.1);
                }
            });

            container.appendChild(square);
        }
    }
}

function getRandomColor() {
    const chars = "01234566789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}